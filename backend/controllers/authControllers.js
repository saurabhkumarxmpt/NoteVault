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

exports.login=async(req,res)=>{

    const{email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.status(400).json({message:"user not found"});

        const ismatched=await bcrypt.compare(password,user.password);
        if(!ismatched) return res.status(400).json({message:"Password not match"});

        const token=jwt.sign({userId:user._id},process.env.JWT_SECERT,{expiresIn:'1h'});
        res.json({token,user});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}