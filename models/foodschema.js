const mongoose= require('mongoose')

const foodschema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:false
    },
    spicy:{
        type:Boolean,
        required:false
    },
    vegetarian:{
        type:Boolean,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true 
    },
})

const foodlists=new mongoose.model('foodlists',foodschema)

module.exports = foodlists