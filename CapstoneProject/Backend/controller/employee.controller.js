var {requestModel} = require("../model/employee.model");
var {orderModel} = require("../model/employee.model");
var {userModel} = require("../model/employee.model");
var {empModel} = require("../model/employee.model");

let sendRequest = (req,res)=> {
    let request = new requestModel({
        //_id:req.body.rid,
        request:req.body.request
    });

    request.save((err,result)=>{
        if(!err){
            res.send("Record stored successfully");
        }else{
            res.send("Record didn't store " + err);
        }
    })
}

let viewOrders = (req,res)=>{
    orderModel.find({},(err,result)=>{
        if(!err){
            res.json(result);
        }
    })
}

let updateOrderStatus = (req,res)=>{
    let oid = req.body.oid;
    let updateStatus = req.body.status;
    orderModel.updateMany({_id:oid}, {$set:{status:updateStatus}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Status updated successfully");
            }else{
                res.send("Record is not available");
            }
        }else{
            res.send("Error generated "+err);
        }
    })
}

let unlockUser = (req,res)=>{
    let uid = req.body.uid;
    let unlock = req.body.status;
    userModel.updateMany({_id:uid}, {$set:{status:unlock}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("User unlocked successfully");
            }else{
                res.send("Failed to unlock user");
            }
        }else{
            res.send("Error generated "+err);
        }
    })
}
let changePassword = (req,res)=>{
    let eid = req.body.eid;
    let changePass = req.body.password;
    empModel.updateMany({_id:eid}, {$set:{password:changePass}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                res.send("Password changed successfully");
            }else{
                res.send("Failed to change passworrd");
            }
        }else{
            res.send("Error generated "+err);
        }
    })
}


module.exports = {sendRequest, viewOrders, updateOrderStatus, unlockUser, changePassword}