const mongoose=require('mongoose')

const registerschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const register=new mongoose.model('register',registerschema)

module.exports = register