const express=require('express');
const route=express();
const mongoose=require('mongoose')
const Item=mongoose.model("Item")
const reqLoginSeller=require('../middleware/requireLoginSeller')


route.post('/createItem',reqLoginSeller,(req,res)=>{
    const {name,category,price}=req.body;
    if(!name || !category || !price){
       return res.json({error:"Please fill all the fields"})
    }
    req.user.password=undefined;
    const item=new Item({
        name,
        category,
        price,
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

module.exports=route;