const mongoose =require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        
    },
    category:{
        type:String
    },
    price:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"Seller"
    }
    
})

mongoose.model("Item",ItemSchema)