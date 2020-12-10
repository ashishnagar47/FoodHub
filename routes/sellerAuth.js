const express=require('express')
const route=express();
const mongoose=require('mongoose')
const Seller=mongoose.model('Seller')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET} =require('../config/keys')
const reqLogin=require('../middleware/requireLoginSeller')

route.get('/protected1',reqLogin,(req,res)=>{
    res.send('hello seller')
})

route.post('/seller/signup',(req,res)=>{
    const {name,email,password,storeName,image,address,cityName}=req.body
    if(!name || !email || !password){
       return res.status(422).json({error:"Please fill all the fields"})
    }
    
    Seller.findOne({email:email})
        .then((savedSeller)=>{
            if(savedSeller){
               return res.status(422).json({error:"email Id already exist"})
            }
            
            bcrypt.hash(password,12)
            .then(hashedPassword=>{
                const seller=new Seller({
                    name,
                    email,
                    password:hashedPassword,
                    storeName,
                    image,
                    address,
                    cityName
                })
            
            seller.save()
            .then(seller=>{
                res.json({message:"Saved Successfully"})
            })
            .catch((err)=>console.log(err))
        })
    })
        .catch((err)=>console.log(err))
})

route.post('/seller/signin',(req,res)=>{
    const {email,password}=req.body

    if(!email || !password){
        res.status(422).json({error:"Please fill all the fields"})
    }
    
    Seller.findOne({email:email})
    .then((savedSeller)=>{
        if(!savedSeller){
            res.json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedSeller.password)
        .then((doMatch)=>{
            if(doMatch){
                const token=jwt.sign({_id:savedSeller._id},JWT_SECRET)
                res.json(token)
            }
            else{
                res.json({error:"Invalid email or password"})
            }
        })
        .catch((err)=>console.log("Error"+ err))
    })
    .catch((err)=>console.log("Error2"+err))
})

module.exports=route