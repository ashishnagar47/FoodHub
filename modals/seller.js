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
    image: {
        type:String,
    },
    address:{
        type:String,
        require:true
    },
    cityName:{
        type:String,
        required:true
    }
    
})

mongoose.model("Seller",sellerSchema)