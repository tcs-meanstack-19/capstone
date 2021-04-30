let { RaiseTicketModel } = require("../model/user.model.js");
let { UserModel } = require("../model/user.model.js");

let raiseTicket = (req, res)=>{    /// need to update carefully
    let user=req.body.userName;

    console.log(req.body.userName)
    UserModel.find({userName:user}, (err,result)=>{
        if(err)throw err;
        if(result.length==0){
            return res.json({success:false, msg:"Can't find the user"})
        }else{
            let ticket = new RaiseTicketModel({
                _id: req.body.userName,
                msg:req.body.msg
            })
            console.log(ticket)
        
            ticket.save((error,result)=>{
                if(!error){
                    return res.json({success:true, msg:"Ticket sent"});
                }else {
                    return res.json({success:false, msg:"Already Ticket Submitted"});
                }
            })
        }
    })
}

module.exports = {raiseTicket}