let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let ProductSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price:Number,
    imgUrl:String
})

let OrderSchema = mongoose.Schema({   // need to add _id as user_id waiting for authentication to work _id: number
    orders: [{}], 
    totalCartAmount: Number,
    orderStatus: String
})

let ProductModel = mongoose.model("products", ProductSchema);
let OrderModel = mongoose.model("orders", OrderSchema);

module.exports = { ProductModel, OrderModel };