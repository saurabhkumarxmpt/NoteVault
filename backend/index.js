require('dotenv').config();
const express=require('express');
const app=express();
const datbase=require('./config/database');
const PORT=process.env.PORT;
const authRoutes=require('./routes/authRoutes');

app.use(express.json());
datbase();

app.use('/auth',authRoutes);
app.get('/',(req,res)=>{
    res.json({message:"This is the home page"});
});


app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run");
    }
});