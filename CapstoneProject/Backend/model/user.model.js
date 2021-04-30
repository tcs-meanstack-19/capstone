let mongoose = require("mongoose");
mongoose.Promise = global.Promise;      // creating reference. 

let RaiseTicketSchema = mongoose.Schema({
    _id: String,
    msg: String
})

let UserSchema = mongoose.Schema({
    userName: String
})

let RaiseTicketModel = mongoose.model("tickets", RaiseTicketSchema);

let UserModel = mongoose.model("users", UserSchema);

module.exports = {RaiseTicketModel, UserModel};