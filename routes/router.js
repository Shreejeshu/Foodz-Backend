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
router.get('/foodz/foods',jwtMiddleware, allfood.getfoods)
router.get('/foodz/viewfood/:id',jwtMiddleware, allfood.viewfood)
router.post('/foodz/addtocart',jwtMiddleware,cart.addtocart)
router.get('/foodz/getcartitems',jwtMiddleware,cart.getcart)
router.delete('/foodz/removeitem/:id',jwtMiddleware,cart.deletecartitem)
router.get('/foodz/incart/:id',cart.incart)
router.get("/foodz/decart/:id",cart.decount)
router.post("/foodz/register",registercontroller.registeruser)
router.post('/foodz/userlogin',logincontroller.loginuser)
router.post('/foodz/adminlogin',adminlogin.loginadmin)
router.post('/foodz/addfood',allfood.addfoods)
router.get('/foodz/getuserdetails',adminlogin.getuser)
router.delete('/foodz/removeuser/:username',registercontroller.removeuser)
router.delete('/foodz/emptycart',cart.emptycart)
router.get('/foodz/showfoods',allfood.showfoods)
router.delete('/foodz/removedbfood/:id',allfood.deletecartitem)
router.post('/foodz/useraddress',adminlogin.getaddress)
router.post('/foodz/showuseraddress',adminlogin.showaddress)
router.get('/foodz/getpizza',allfood.getpizza)
router.get('/foodz/getsalad',allfood.getsalad)
router.get('/foodz/getdrink',allfood.getdrink)
router.get('/foodz/getsauce',allfood.getsauce)
router.get('/foodz/getpasta',allfood.getpasta)
router.get('/foodz/getdessert',allfood.getdessert)



module.exports= router