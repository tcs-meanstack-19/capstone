let express = require("express");
let router = express.Router();  //router reference. 
let Controller = require("../controller/cap.controller.js");

//mapping sub path with http methods. 
router.get("/allProductDetails",Controller.getProductDetails);
router.get("/retrieveProductById/:pid",Controller.getProductById)
router.post("/storeProductDetails",Controller.storeProductDetails);
router.delete("/deleteProductById/:pid",Controller.deleteProductById);
router.put("/updateProductPrice",Controller.updateProductPrice);
router.get("/viewRequests",Controller.getRequestDetails);
router.post("/addEmployeeDetails",Controller.addEmployeeDetails);
router.delete("/deleteEmployeeById/:eid",Controller.deleteEmployeeById);


module.exports=router;