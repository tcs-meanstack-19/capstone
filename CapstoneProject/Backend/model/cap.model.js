let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    desc:String,
    price:Number,
    quantity:Number
})

let RequestSchema = mongoose.Schema({
    _id:String,
    desc:String
})

let EmployeeSchema = mongoose.Schema({
    _id:Number,
    fname:String,
    lname:String,
    email:String,
    pwd:String

})

let ProductModel = mongoose.model("products",ProductSchema,"products");
let RequestModel = mongoose.model("requests",RequestSchema,"requests");
let EmployeeModel = mongoose.model("employees",EmployeeSchema,"employees");

module.exports = {ProductModel,RequestModel,EmployeeModel}