//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//Database URL Details 
//Replace the link with MongoDB URL (MONGODB_URI)
let url = "mongodb+srv://grocers-capstone:group19DBs@grocers-cluster.7ad9y.mongodb.net/myFirstDatabase&w=majority";

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());           // enable cors policy 

//Database connection without warning 
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module like a import concept. 
var Product = require("./router/cap.router.js");

//Middleware 

// http://localhost:9090/Products/allProductDetails   Get App Product Details 
// http://localhost:9090/Products/retrieveProductById/102   Get App Product Details by Id  
// http://localhost:9090/Products/storeProductDetails    rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/Products/deleteProductById/101
// http://localhost:9090/Products/updateProductPrice  update price using pid {"pid":103,"price":48000}

app.use("/products",Product)
app.use("/requests",Product)
app.use("/employee",Product)

app.listen(9090,()=>console.log("Server running on port number 9090"));