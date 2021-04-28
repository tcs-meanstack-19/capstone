let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http method
router.post("/sendRequest",EmployeeController.sendRequest);


module.exports=router;