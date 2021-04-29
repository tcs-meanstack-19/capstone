var {requestModel} = require("../model/employee.model");
var {orderModel} = require("../model/employee.model");

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


module.exports = {sendRequest, viewOrders, updateOrderStatus}