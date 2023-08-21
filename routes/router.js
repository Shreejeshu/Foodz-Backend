const express=require('express')
const jwt=require('jsonwebtoken')
const allfood=require('../controller/allfoodcontroller')
const cart=require('../controller/cartcontroller')
const registercontroller= require('../controller/registercontroller')
const logincontroller= require('../controller/logincontroller')
const adminlogin= require('../controller/admincontroller')

const jwtMiddleware= (req,res,next) =>{
    console.log("jwt middleware");
    const token= req.headers["verify"]
    console.log(token);
    try{
        const data= jwt.verify(token, "superkey123")
        if(data){
            console.log("sucess");
            req.username= data.username
            next()
        }
        
        else{
            console.log("error in try");
        }
       
    }
    catch(err){
        console.log("error");
        res.status(401).json({message:"Error occured.. Please login"})
    }
}

const router=new express.Router()
router.get('/foodx/foods',jwtMiddleware, allfood.getfoods)
router.get('/foodx/viewfood/:id',jwtMiddleware, allfood.viewfood)
router.post('/foodx/addtocart',jwtMiddleware,cart.addtocart)
router.get('/foodx/getcartitems',jwtMiddleware,cart.getcart)
router.delete('/foodx/removeitem/:id',jwtMiddleware,cart.deletecartitem)
router.get('/foodx/incart/:id',cart.incart)
router.get("/foodx/decart/:id",cart.decount)
router.post("/foodx/register",registercontroller.registeruser)
router.post('/foodx/userlogin',logincontroller.loginuser)
router.post('/foodx/adminlogin',adminlogin.loginadmin)
router.post('/foodx/addfood',allfood.addfoods)
router.get('/foodx/getuserdetails',adminlogin.getuser)
router.delete('/foodx/removeuser/:username',registercontroller.removeuser)
router.delete('/foodx/emptycart',cart.emptycart)
router.get('/foodx/showfoods',allfood.showfoods)
router.delete('/foodx/removedbfood/:id',allfood.deletecartitem)
router.post('/foodx/useraddress',adminlogin.getaddress)
router.post('/foodx/showuseraddress',adminlogin.showaddress)
router.get('/foodx/getpizza',allfood.getpizza)
router.get('/foodx/getsalad',allfood.getsalad)
router.get('/foodx/getdrink',allfood.getdrink)
router.get('/foodx/getsauce',allfood.getsauce)
router.get('/foodx/getpasta',allfood.getpasta)
router.get('/foodx/getdessert',allfood.getdessert)



module.exports= router