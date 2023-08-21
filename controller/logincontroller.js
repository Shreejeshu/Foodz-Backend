const logins=require('../models/registerschema')
const jwt=require('jsonwebtoken')

exports.loginuser= async (req,res) =>{
    const {username,password}= req.body
    try{
        const details= await logins.findOne({username,password})
        if(details){
            const token= jwt.sign({
                username : username,
            },"superkey123")
            res.status(200).json({
                message:'Login Successfuly ',token,username:username})
        }
        else{
            res.status(404).json('accnt not found')
        }

    }
    catch(err){
        res.status(403).json(err)
    }
}