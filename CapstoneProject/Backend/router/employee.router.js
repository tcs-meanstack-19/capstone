let express = require("express");
let router = express.Router();  //router reference. 
let EmployeeController = require("../controller/employee.controller.js");

//mapping sub path with http method
router.post("/sendRequest",EmployeeController.sendRequest);
router.get("/viewOrders", EmployeeController.viewOrders);
router.get("/viewLockedUsers", EmployeeController.viewLockedUsers);  // shows the locked users' ID with the msg
router.put("/updateOrderStatus", EmployeeController.updateOrderStatus);
router.put("/unlockUser", EmployeeController.unlockUser);
router.put("/changePassword", EmployeeController.changePassword);

module.exports=router;