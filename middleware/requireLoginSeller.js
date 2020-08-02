const jwt=require('jsonwebtoken')
const {JWT_SECRET} =require('../keys')
const mongoose=require('mongoose')
const seller=mongoose.model("Seller")

module.exports=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization){
       return res.status(401).json({error:"You must be logged in"})
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
           return res.status(401).json({error:"You must be logged in"})
        }
        const {_id}=payload
        seller.findById(_id).then(sellerdata=>{
            req.user=sellerdata
            next()
        })
        
    })
}