const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOBD_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useMongoClient:true
})



// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error', error)
// })