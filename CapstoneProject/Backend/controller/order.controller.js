let OrderModel= require("../model/order.model.js");

let StoreOrderInfo = (req,res)=> {

    const orderlist = req.body;

    console.log(orderlist[0])
   
    let user = "";      
    let cartAmount = 0;
    let status = "Ordered";
    for(let i=0; i< orderlist.length; i++)
    {
        let totalPriceCart = orderlist[i].totalPrice
        cartAmount += totalPriceCart
        user+=orderlist[i].userId
    }
        // need to add _id as user id
        const order = new OrderModel({_id: user, orders : orderlist, totalCartAmount:cartAmount, orderStatus:status});
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

module.exports= {StoreOrderInfo}