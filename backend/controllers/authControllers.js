const User=require('../models/User');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

exports.signUp=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hasedPassword=await bcrypt.hash(password,10);
        const user=new User({name,email,password:hasedPassword});
        await user.save();
        res.json({message:'User registered successfully'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}