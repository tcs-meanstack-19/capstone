let requestModel = require("../model/employee.model.js");

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


module.exports = {sendRequest}