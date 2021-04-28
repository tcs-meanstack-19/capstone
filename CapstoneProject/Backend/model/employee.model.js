let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let requestSchema = mongoose.Schema({
    //_id:Number,
    request:String
})

let requestModel = mongoose.model("", requestSchema, "Requests");


module.exports = requestModel