const mongoose=require('mongoose')

const addressschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    flat:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
    
})

const address=new mongoose.model('address',addressschema)

module.exports = address