require('dotenv').config()

const express= require('express')
const cors=require('cors')
const router=require('./routes/router')
const jwt=require('jsonwebtoken')
require('./db/connection')
const server=express()
const port=3000 || process.env.PORT
// app specific middleware



// server app

server.use(cors())
server.use(express.json())
server.use(router)
// use app specific middleware



// run app
server.listen(port,()=>{
    console.log(`foodz server started ${port}`);
})

