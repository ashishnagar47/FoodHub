const express=require('express')
const route=express();
const mongoose=require('mongoose')
const User=mongoose.model('User')
const bcrypt=require('bcryptjs')
//const jwt=require('jsonwebtoken')

route.get('/',(req,res)=>{
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

module.exports=route