const register= require('../models/registerschema')

exports.registeruser= async (req,res) =>{
    const {username,name,password} = req.body
    try{
        const details= await register.findOne({username})
        if(details){
            res.status(403).json('Account already exists')
        } 
        else{
            const newuser= new register({
                username,name,password
            })
            await newuser.save()
            res.status(200).json("User Account created")
        }
    }
    catch(err){
        res.status(403).json(err)
    }

}    

exports.removeuser= async (req,res) =>{
    const {username}= req.params
    try{
        const details= await register.deleteOne({username})
        console.log(details);
        if(details){
            const alluser=await register.find()
            res.status(200).json(alluser)
        }
        else{
            res.status(404).json("User not found")
        }
    }    
    catch(err){
        res.status(403).json(err)
    }
}