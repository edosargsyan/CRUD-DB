let express = require('express')
let mongoose = require('mongoose')
let app = express();

let Post = require('./model.js')
const router = require('./router.js')
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use(router)
async function start(){
    try{  
       await mongoose.connect('mongodb+srv://sargsyane628:Edo778899@cluster0.xsfuuqs.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>console.log('connect'))
        app.listen(3000)
    }
    catch(e){
        console.log(e)
    }
}
start()
