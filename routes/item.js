const express=require('express');
const route=express();
const mongoose=require('mongoose')
const Item=mongoose.model("Item")
const reqLoginSeller=require('../middleware/requireLoginSeller')


route.post('/createItem',reqLoginSeller,(req,res)=>{
    const {name,category,price,picture}=req.body;
    if(!name || !category || !price){
       return res.json({error:"Please fill all the fields"})
    }
    req.user.password=undefined;
    // req.user.address=undefined;
    const item=new Item({
        name,
        category,
        price,
        picture,
        postedBy:req.user
    })
    item.save()
    .then(result=>{
        res.json({item:result})
    })
    .catch(err=>{console.log(err)})
})

route.get('/showItem',(req,res)=>{
    Item.find()
    .populate("postedBy","_id storeName address cityName")
    .then(item=>res.json({item}))
    .catch(err=>console.log(err))
})

route.get('/myItem',reqLoginSeller,(req,res)=>{
    Item.find({postedBy:req.user._id})
    .populate("postedBy","_id storeName address cityName")
    .then(myItem=>{
        res.json({myItem})
    })
    .catch(err=>console.log(err))
})

module.exports=route;