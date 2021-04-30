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
    _id:String,
    name:String,
    status:Boolean
});
//emp Schema
var empSchema = new mongoose.Schema({
    _id:Number,
    name:String,
    password:String //this is what im dealing with
})

//raised ticket Schema
var raiseTicketSchema = new mongoose.Schema({
    _id: String,
    msg: String
})

const requestModel = mongoose.model('requests', requestSchema)
const orderModel = mongoose.model('orders', orderSchema)
const userModel = mongoose.model('users', userSchema)
const empModel = mongoose.model('employees', empSchema)
const raiseTicketModel = mongoose.model('raisetickets', raiseTicketSchema)


module.exports = {requestModel, orderModel, userModel, empModel, raiseTicketModel}
