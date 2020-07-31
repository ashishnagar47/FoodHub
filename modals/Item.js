const mongoose =require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    type:{
        type:String
    },
    price:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"Store"
    }
    
})

mongoose.model("Item",ItemSchema)