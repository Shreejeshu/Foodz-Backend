const mongoose=require('mongoose')

const adminloginschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    
})

const admins=new mongoose.model('admins',adminloginschema)

module.exports = admins