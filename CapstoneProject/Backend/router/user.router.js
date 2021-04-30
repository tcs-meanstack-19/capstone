let express = require("express");
let router = express.Router();  //router reference. 
let UserController = require("../controller/user.controller.js");

//mapping sub path with http methods. 
router.post("/raiseTicket",UserController.raiseTicket);

module.exports=router;