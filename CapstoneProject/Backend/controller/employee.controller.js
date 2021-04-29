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


module.exports = {sendRequest, viewOrders}