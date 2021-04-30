
const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');
let RaiseTicketModel = require("../model/user.model.js");

module.exports.register = (req, res, next) => {
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.password = req.body.password;
    user.dob = req.body.dob;
    user.phoneno = req.body.phoneno;
    user.address = req.body.address;
    user.status = false;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    user.userName =text;
  
    console.log("user object is" , user)

    

    user.save((err, doc) => {
        if (!err){
            console.log("data base returned" , doc)
            res.send(doc);
        }
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        console.log("NO EERRROR", user)
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['firstName','email']) });
        }
    );
}

module.exports.raiseTicket = (req, res)=>{  
    let user=req.body.userName;

    console.log(req.body.userName)
    User.find({userName:user}, (err,result)=>{
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
