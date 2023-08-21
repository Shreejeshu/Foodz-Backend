// define mongo db connection
const mongoose=require('mongoose')

const db= process.env.DATABASE_URL

mongoose.connect(db,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})