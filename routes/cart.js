const express=require('express')
const route=express()
const mongoose=require('mongoose')
const Cart=mongoose.model("Cart")

route.post('/cart',(req,res)=>{
    const {itemName,price,storeName,quantity}=req.body
    const cart=new Cart({
        itemName,
        price,
        storeName,
        quantity,
        postedBy:req.user
    })
    cart.save()
    .then(result=>{
        res.json({cart:result})
    })
    .catch(err=>console.log(err))
})



module.exports=route