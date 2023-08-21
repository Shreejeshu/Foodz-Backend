const  cart=require('../models/cartschema')

exports.addtocart= async (req,res)=>{
    // get foods details
    const {id,name,image,price,quantity} = req.body

    try{
        const foods= await cart.findOne({id})
        if(foods){
            // foods is in cart
            // increment foods quantity
            foods.quantity+=1
            // update total
            foods.total=foods.price * foods.quantity

            foods.save()

            res.status(200).json('items added to your cart...')
        }
        else{
            // foods not in cart
            // add foods in cart
            const newfoods= new cart({id,name,price,image,quantity,total:price})
            // save new foods
            await newfoods.save()
            res.status(200).json('item added to your cart...')
        }
    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.getcart= async(req,res)=>{
    try{
        const food= await cart.find()
        if (food){
            res.status(200).json(food)
        }
        else{
            res.status(404).json('no foods')
        }
        
    }
    catch(err){
        res.status(403).json(err)
    }
}

exports.deletecartitem = async(req,res) =>{
    const {id}= req.params
    
    try{
        const removeitem= await cart.deleteOne({id})
        if(removeitem){
            const allitem=await cart.find()
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

exports.incart = async (req,res) =>{
    const {id}=req.params
    try{
        const food= await cart.findOne({id})
        if(food){
            food.quantity +=1
            food.total = food.price * food.quantity
            await food.save()

            const allitem =await cart.find()
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

exports.decount= async (req,res)=>{
    const {id}=req.params
    try{
        const food= await cart.findOne({id})
        if(food){
            // update quantity and grandtotal
            food.quantity -=1
            if(food.quantity==0){
                // remove food from cart
               const allitem= await cart.deleteOne({id})
               res.status(200).json(allitem)
            }
            else{
                food.total= food.price*food.quantity
                await food.save()
                // get all cart collection item after updating the particular item count
                const allitem= await cart.find()
                res.status(200).json(allitem)
            }
            
        }
        else{
            res.status(404).json("food not in your cart")
        }
    }
    catch(err){
        res.status(403).json(err)
    }
}

exports.emptycart= async (req,res) =>{
    try{
        const foods= await cart.deleteMany({})
        res.status(200).json("Your cart items cleared")
    }
    catch(err){
        res.status(403).json(error)
    }
}