const express=require('express')
const app= express()
const mongoose=require('mongoose')
const {MONGOURI} =require('./configuration/keys')


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

require('./modals/user')
require('./modals/seller')
require('./modals/Item')
require('./modals/cart')


app.use(express.json())
app.use(require('./routes/userAuth'))
app.use(require('./routes/sellerAuth'))
app.use(require('./routes/item'))
app.use(require('./routes/cart'))

app.listen(5001,()=>{
    console.log("server started on http://localhost:5001")
})