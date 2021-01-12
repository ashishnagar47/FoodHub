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
        type:Number,
        required:true
    },
    picture:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    storeName:{
        type:String
    },
    postedBy:{
        type:ObjectId,
        ref:"Seller"
    }
    
})

mongoose.model("Item",ItemSchema)