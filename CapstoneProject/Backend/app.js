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

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());    // enable cors policy 
app.use(passport.initialize());
app.use('/api', rtsIndex);
       
//link to router module like a import concept. 
var Product = require("./router/cap.router.js");

// http://localhost:9090/Products/allProductDetails   Get App Product Details 
// http://localhost:9090/Products/retrieveProductById/102   Get App Product Details by Id  
// http://localhost:9090/Products/storeProductDetails    rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/Products/deleteProductById/101
// http://localhost:9090/Products/updateProductPrice  update price using pid {"pid":103,"price":48000}

app.use("/products",Product)
app.use("/requests",Product)
app.use("/employee",Product)

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
