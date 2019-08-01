const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () =>{
    console.log('Server is up on port ' + port)
})

//Understanding multer for file uploads
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {  //this is a regex
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)

//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, false)
//     }
// })

//here we tried out the error handling, so we dont receive a html response
// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

//learning upload images
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message})
// })

//for GET requests the site is down
// app.use((req, res, next ) => {
//     if (req.method === "GET") {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
//     // console.log(req.method, req.path)
//     // next()
// })

//for all the requests the site is down
// app.use((req, res, next ) => {
//     res.status(503).send('Under Maintenance')
//         // console.log(req.method, req.path)
//         // next()
// })


//Without middleware: new request -> run route handler
//With middleware:    new request -> do something -> run route handler

// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from router')
// })
// app.use(router)




//To run the thing //npm run start or npm run dev

//learn about populate
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5d3ffc31133c71124bd431eb')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5d3ff9204763d710c4179223')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()


//learning about .toJSON
// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () { 
//     return {}
// }
// console.log(JSON.stringify(pet))




//learning about jwt
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: "abc123" }, 'helloworldthisisworking', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'helloworldthisisworking')
//     console.log(data)
// }

// myFunction()
 


//learning about bcrypt
// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345', hashedPassword)
//     console.log(isMatch)
// }

// myFunction()


