let {ProductModel}= require("../model/product.model.js");
let {OrderModel}= require("../model/product.model.js");

//Retrieve all product details 
let getProductDetails =(req,res)=> {

    ProductModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

let getProductById = (req, res)=>{
    let pid = req.params.pid;
    ProductModel.find({_id:pid}, (err, result)=>{
        if(!err){
            res.json(result);
        }
    })
}

let StoreOrderInfo = (req,res)=> {

    const orderlist = req.body;
    console.log(orderlist[0].totalPrice)
   
    // let user = 0;      need to assign the value in the loop by using the user_id as key value
    let cartAmount = 0;
    let status = "Ordered";
    for(let i=0; i< orderlist.length; i++)
    {
        let totalPriceCart = orderlist[i].totalPrice
        cartAmount += totalPriceCart
    }
        // need to add _id as user id
        const order = new OrderModel({orders : orderlist, totalCartAmount:cartAmount, orderStatus:status});
        console.log(order);
        order.save((err,result)=> {
        if(err){
            console.log("error")
            return res.status(422).json({"error":"Order not inserted"});
        }else{
            console.log("Order Saved");
            return res.status(200).json({ 'Order saved': true })
        }
    });
}

module.exports={getProductDetails, getProductById, StoreOrderInfo}