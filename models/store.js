const mongoose =require('mongoose')
const {ObjectId}=mongoose.Schema.Types

const storeSchema=new mongoose.Schema({
    name={
        type:String,
        required:true
    },
    image={
        type:String,
        require:true
    }
    
})

mongoose.model("Store",storeSchema)