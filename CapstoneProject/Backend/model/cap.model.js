let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    desc:String,
    price:Number,
    quantity:Number,
    imgUrl:String
})

let RequestSchema = mongoose.Schema({
    _id:String,
    request:String
})

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    fname:String,
    lname:String,
    email:String,
    pwd:String
})

let ProductModel = mongoose.model("products",ProductSchema);
let RequestModel = mongoose.model("requests",RequestSchema);
let EmployeeModel = mongoose.model("employee",EmployeeSchema);

module.exports = {ProductModel,RequestModel,EmployeeModel}