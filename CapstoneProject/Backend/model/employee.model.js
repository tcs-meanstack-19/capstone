var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var requestSchema = new mongoose.Schema({
    request:String
});
var orderSchema = new mongoose.Schema({
    _id:Number,
    userID:Number,
    items: Array,
    amount:Number,
    status:String
});
//user schema
var userSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    status:String
});
//emp Schema
var empSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    password:String //this is what im dealing with
})

const requestModel = mongoose.model('requests', requestSchema)
const orderModel = mongoose.model('orders', orderSchema)
const userModel = mongoose.model('users', userSchema)
const empModel = mongoose.model('employees', empSchema)
// var requestModel = mongoose.model("", requestSchema, "Requests");
// var orderModel = mongoose.model("", orderSchema, "Orders");


module.exports = {requestModel, orderModel, userModel, empModel}
