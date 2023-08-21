const admins=require('../models/adminschema')
const register=require('../models/registerschema')
const address= require('../models/addressschema')
const jwt=require('jsonwebtoken')


exports.loginadmin= async (req,res) =>{
    const {username,password}= req.body
    try{
        const details= await admins.findOne({username,password})
        if(details){
            const token= jwt.sign({
                username : username,
            },"superKey123")
            res.status(200).json({
                message:'Login Successfuly ',token,username:username})
            res.status(200).json(`${username}`)
        }
        else{
            res.status(404).json('accnt not found')
        }

    }
    catch(err){
        
    }
}

exports.getuser=async (req,res) =>{
    try{
        const users= await register.find()
        if (users){
            res.status(200).json(users)
        }
        else{
            res.status(404).json('No users')
        }
    }
    catch(err){
        res.status(403).json(err)
    }
}

exports.getaddress= async(req,res) =>{
    const {username,name,flat,street,state}= req.body
    try{
        const newaddress=new address({
            username,name,flat,street,state
        })
        await newaddress.save()
        res.status(200).json("Address stored")
    }
    catch(err){
        res.status(401).json(err)
    }
}

exports.showaddress= async(req,res)=>{
    const {username}=req.body
    try{
        const details= await address.find({username})
        res.status(401).json(details)
    }
    catch(err){
        res.status(401).json(err)
    }
}
