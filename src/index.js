const express = require('express')
require('./db/mongoose')
const userRouter = require ('./routers/user')
const taskRouter = require ('./routers/task')


const app = express()
const port = process.env.PORT

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits:{
        filesize:1000000
    },
    fileFilter(req,file,cb) {
        console.log(file)
        if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
            cb(new Error('Please upload an image only'))
        }
        cb (undefined,true)
    }
})

app.post('/upload' , upload.single('upload'),
(req,res)=>{
    res.send()
},(error,res,req,next)=>{
    res.status(400).send({
        error:error.message
    })
})


// const multer = require('multer')
// const upload = multer({
//     dest: 'avatars'
// })
// app.post('/users/me/avatar' , upload.single('avatar'),
// (req,res)=>{
//     res.send()
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log("Server is Up on Port " + port)
})


app.use(express.json())