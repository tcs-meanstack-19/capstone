
let {ProductModel} = require("../model/cap.model.js");
let {RequestModel} = require("../model/cap.model.js");
let {EmployeeModel} = require("../model/cap.model.js");

//Retrieve all product details 
let getProductDetails =(req,res)=> {

    ProductModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })

}

let getProductById = (req,res)=> {
    
    let pid = req.params.pid;       //passing id through path param 
    
    ProductModel.find({_id:pid},(err,data)=> {
        if(!err){
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}

let storeProductDetails = (req,res)=> {
    var text = "";
    var possible = "0123456789";
                  
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    let product = new ProductModel({
        _id:text,
        pname:req.body.pname,
        desc:req.body.desc,
        price:req.body.price,
        quantity:req.body.quantity,
        imgUrl:req.body.imgUrl
    });

    product.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
        }
    })

}

let deleteProductById= (req,res)=> {
    let pid = req.params.pid;
    ProductModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let updateProductPrice= (req,res)=> {
    let pid = req.body.pid;
    let updatedPrice = req.body.price;
    let updatedQuantity = req.body.quantity;
    ProductModel.updateMany({_id:pid},{$set:{price:updatedPrice,quantity:updatedQuantity}},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Record updated succesfully")
            }else {
                    res.send("Record is not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let getRequestDetails =(req,res)=> {

    RequestModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })

}

let addEmployeeDetails = (req,res)=> {
   
    var text = "";
    var possible = "0123456789";
                  
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        var pass = "";
        pass = "welcome"+String(text)
    let employee = new EmployeeModel({
        _id:text,
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        pwd:pass
    });

    employee.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
        }
    })

}

let deleteEmployeeById= (req,res)=> {
    let eid = req.params.eid;
    EmployeeModel.deleteOne({_id:eid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

module.exports={getProductDetails,getProductById,storeProductDetails,deleteProductById,updateProductPrice,
    getRequestDetails,addEmployeeDetails,deleteEmployeeById}