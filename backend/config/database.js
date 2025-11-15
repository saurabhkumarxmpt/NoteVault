const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI); //Fatch the MONGO URI from .env file
        console.info('database connect'); //sucessful message
    }catch(err){
        console.err(err.message)
    }
}

module.exports=connectDB;