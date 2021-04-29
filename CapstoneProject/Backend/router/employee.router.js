let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http method
router.post("/sendRequest",EmployeeController.sendRequest);
router.get("/viewOrders", EmployeeController.viewOrders);


module.exports=router;