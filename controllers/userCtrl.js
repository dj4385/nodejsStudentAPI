
const mongoose = require('mongoose'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcrypt'),
      userModel = require('../models/user')


module.exports = {
    registration : (req, res)=>{
        if(!req.body){
            return res.status(400).json({"message":"User detail cannot be empty"})
        } else {
            var pass = new userModel(req.body);
            pass.password = bcrypt.hashSync(req.body.password, 10)
            const userDetail = new userModel({
                fullName : req.body.fullName,
                email : req.body.email,
                password : pass.password
            })
            userDetail.save()
                      .then(userdata=>{
                          res.status(200).send(userdata)
                      })
                      .catch(err=>{
                          res.status(500).send({
                              message: err.message || "Something went wrong while register a user"
                          })
                      })
        }
    },
    signIn : (req, res)=>{
        if(!req){
            return res.status(400).json({"message":"Email Id and Password is required"})
        } else {
            userModel.findOne({
                email : req.body.email
            }, (err, user)=>{
                if(err){
                    throw err
                } else if(!user){
                    res.status(401).json({"message": "Authentication Failed. User not found "})
                } else if(user){
                    if(!user.comparePassword(req.body.password)){
                        res.status(401).json({"message":"Invalid Password"})
                    } else {
                        return res.json({token: jwt.sign({email: userModel.email, fullName : userModel.fullName, _id : user._id},'RESTFULAPIs')})
                    }
                }
            })
        }
    },
    loginRequire : (req, res, next)=>{
        if(req.user){
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized user!' });
        }
    }
}