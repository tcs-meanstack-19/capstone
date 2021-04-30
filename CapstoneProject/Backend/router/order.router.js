let express = require("express");
let router = express.Router();  //router reference. 
let OrderController = require("../controller/order.controller.js");

router.post("/orderList", OrderController.StoreOrderInfo);

module.exports=router;