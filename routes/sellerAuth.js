const express=require('express')
const route=express();
const mongoose=require('mongoose')
const Seller=mongoose.model('Seller')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET} =require('../configuration/keys')
const reqLogin=require('../middleware/requireLoginSeller')

route.get('/seller/:cityName',(req,res)=>{
    Seller.find({cityName:req.params['cityName']})
    .then(store=>{res.json({store})})
    .catch((err)=>console.log(err))
})

route.get('/selle/:storeName',(req,res)=>{
    Seller.findOne({storeName:req.params['storeName']})
    .then(store=>{res.json({store})})   
    .catch((err)=>console.log(err))
})

route.post('/seller/signup',(req,res)=>{
    const {name,email,password,storeName,image,address,cityName}=req.body
    console.log(req.body);
    if(!name || !email || !password ||!storeName ||!address||!cityName ||!image){
        console.log(name,email,password)
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
                // const token=jwt.sign({_id:seller._id},JWT_SECRET)
                // res.json({token,user:{name,email}})
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
                const {_id,name,email,storeName,image,address}=savedSeller;
                res.json({token,user:{_id,name,email,storeName,image,address}})
                // res.json({message:"Signin succesfully"})
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