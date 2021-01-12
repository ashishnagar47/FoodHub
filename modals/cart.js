const mongoose=require('mongoose');
const {ObjectId}=mongoose.Schema.Types

const CartSchema=mongoose.Schema({
    itemName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    storeName:{
        type:String,
        require:true
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Cart",CartSchema);