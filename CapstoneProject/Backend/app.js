//Load all required modules 
let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");


//Database URL Details 
let url = "mongodb://localhost:27017/meanstack";

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
var Employee = require("./router/employee.router.js")

//URL 


//Middleware 

// http://localhost:9090/employee/sendRequest
// http://localhost:9090/employee/viewOrders
// http://localhost:9090/employee/updateOrderStatus    update status using pid {"pid":103,"status":"delivered"}
// http://localhost:9090/employee/unlockUser            update status with uid
// http://localhost:9090/employee/changePassword        update password with eid
// http://localhost:9090/employee/viewLockedUsers
app.use("/employee",Employee)



app.listen(9090,()=>console.log("Server running on port number 9090"));

