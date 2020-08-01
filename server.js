const express=require('express')
const app= express()
const mongoose=require('mongoose')
const {MONGOURI} =require('./keys')

require('./modals/user')
require('./modals/seller')
require('./modals/Item')


app.use(express.json())
app.use(require('./routes/userAuth'))



mongoose.connect(MONGOURI,
   { useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDB YEAH")
})

mongoose.connection.on('error',(err)=>{
    console.log("error connected" , err)
})

app.listen(5002,()=>{
    console.log("server started on http://localhost:5002")
})