const mongoose =require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const sellerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    storeName:{
        type:String,
        required:true
    },
    image:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }
    
})

mongoose.model("Seller",sellerSchema)