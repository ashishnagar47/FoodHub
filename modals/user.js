const mongoose=require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    order:{
        type:ObjectId,
        ref:"Item"
    }
})

mongoose.model("User",userSchema)