const express=require('express')
const route=express();
const mongoose=require('mongoose')
const User=mongoose.model('User')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET} =require('../config/keys')
const reqLoginUser=require('../middleware/requireLoginUser')

route.get('/protected',reqLoginUser,(req,res)=>{
    res.send('hello')
})

route.post('/signup',(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
       return res.status(422).json({error:"Please fill all the fields"})
    }
    
    User.findOne({email:email})
        .then((savedUser)=>{
            if(savedUser){
               return res.status(422).json({error:"email Id already exist"})
            }
            
            bcrypt.hash(password,12)
            .then(hashedPassword=>{
                const user=new User({
                    name,
                    email,
                    password:hashedPassword
                })
            
            user.save()
            .then(user=>{
                res.json({message:"Saved Successfully"})
            })
            .catch((err)=>console.log(err))
        })
    })
        .catch((err)=>console.log(err))
})

route.post('/signin',(req,res)=>{
    const {email,password}=req.body

    if(!email || !password){
        res.status(422).json({error:"Please fill all the fields"})
    }
    
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            res.json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET)
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