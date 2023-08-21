const foodlists=require('../models/foodschema')

exports.getfoods= async (req,res) =>{
    try{
        const allfoods= await foodlists.find()
        res.status(200).json(allfoods)
    }
    catch(err){
        res.status(403).json(err)
    }
}

exports.viewfood= async (req,res)=>{
    const id = req.params.id
    try{
        const allfood=await foodlists.findOne({
            id
        })
        res.status(200).json(allfood)
    }
    catch(err){
        res.status(403).json(err)
    }

}    





exports.addfoods = async(req,res) =>{
    const {id,name,image,price,description,category}= req.body
    try{
    const foods=await foodlists.findOne({id,name,image})
    if(foods){
        res.status(403).json('already food exist')
    }
    else{
        const newproduct= new foodlists({
            id,name,image,price,description,category
        })
        await newproduct.save()
        res.status(200).json("product add to db")
    }
    }
    catch(err){
        res.status(403).json(err)    
    }
  
}

exports.showfoods= async (req,res) =>{
    try{
        const allfoods= await foodlists.find()
        res.status(200).json(allfoods)
    }
    catch(err){
        res.status(403).json(err)
    }
}

exports.deletecartitem = async(req,res) =>{
    const {id}= req.params
    
    try{
        const removeitem= await foodlists.deleteOne({id})
        if(removeitem){
            const allitem=await foodlists.find()
            res.status(200).json(allitem)
        }
        else{
            res.status(404).json("item not present")
        }
    }
    catch(err){
        res.status(403).json(err)
    }
}


exports.getpizza= async(req,res)=>{
    try{
        const allfoods= await foodlists.find({ category :'pizza'})
        res.status(200).json(allfoods)
       
    }
    catch(err){
        res.status(403).json(err)
    }
}
exports.getsalad= async(req,res)=>{
    try{
        const allfoods= await foodlists.find({ category :'salad'})
        res.status(200).json(allfoods)
       
    }
    catch(err){
        res.status(403).json(err)
    }
}
exports.getdrink= async(req,res)=>{
    try{
        const allfoods= await foodlists.find({ category :'drink'})
        res.status(200).json(allfoods)
       
    }
    catch(err){
        res.status(403).json(err)
    }
}
exports.getsauce= async(req,res)=>{
    try{
        const allfoods= await foodlists.find({ category :'sauce'})
        res.status(200).json(allfoods)
       
    }
    catch(err){
        res.status(403).json(err)
    }
}

    exports.getpasta=  async(req,res)=>{
        try{
            const allfoods= await foodlists.find({ category :'pasta'})
            res.status(200).json(allfoods)
        }
        catch(err){
            res.status(403).json(err)
        }
    
}



exports.getdessert=  async(req,res)=>{
    try{
        const allfoods= await foodlists.find({ category :'dessert'})
        res.status(200).json(allfoods)
    }
    catch(err){
        res.status(403).json(err)
    }
}


