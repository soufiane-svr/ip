const express = require ('express')
const mongoose = require ('mongoose')
const app = express()



mongoose.connect('mongodb+srv://sous78250:Sousou12@cluster0.vac53db.mongodb.net/')
.then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log('error')
})


// import users model

const UserModel = require('./models/Users')



app.get('/users',async (req,res)=>{
    const user =  await UserModel.find().maxTimeMS(100000);
    res.json(user)
})

app.get('/',(req,res)=>{
    res.send('<h1>Hello world<h1/>')
})

app.post('/users',async(req,res)=>{
    const userPost = new UserModel()
    userPost.name ='hamid'
    userPost.age = 54
    userPost.email = 'walid'
    await userPost.save()
    res.send('true')
    
})


app.listen('3000',(req,res)=>{
    console.log('hello world');
})