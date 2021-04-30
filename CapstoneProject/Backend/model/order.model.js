let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let OrderSchema = mongoose.Schema({
    _id: String,
    orders: [{}], 
    totalCartAmount: Number,
    orderStatus: String
})

let OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;