var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

var requestSchema = new mongoose.Schema({
    request:String
});
var orderSchema = new mongoose.Schema({
    userID:Number,
    items: Array,
    amount:Number,
    status:String
});

const requestModel = mongoose.model('requests', requestSchema)
const orderModel = mongoose.model('orders', orderSchema)
// var requestModel = mongoose.model("", requestSchema, "Requests");
// var orderModel = mongoose.model("", orderSchema, "Orders");


module.exports = {requestModel, orderModel}
