require('./config/config');
require('./model/db');
require('./config/passportConfig');
//Load all required modules 
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./router/index.router');

var app = express();
// load the frontend file in angular program
app.get('/', (req, res)=>{
    res.sendFile(__dirname+"/index.html")
})

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());    // enable cors policy 
app.use(passport.initialize());
app.use('/api', rtsIndex);
       
//link to router module like a import concept. 
var Product = require("./router/cap.router.js");
var Raiseticket = require("./router/index.router.js");
var Orders = require("./router/order.router.js");

// http://localhost:9090/products/allProductDetails   Get App Product Details 
// http://localhost:9090/products/retrieveProductById/102   Get App Product Details by Id  
// http://localhost:9090/products/storeProductDetails    rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/products/deleteProductById/101
// http://localhost:9090/Products/updateProductPrice  update price using pid {"pid":103,"price":48000}

app.use("/products",Product)
app.use("/requests",Product)
app.use("/employee",Product)
app.use("/user", Raiseticket)
app.use("/orders", Orders)

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});

// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
