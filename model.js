const {Schema,model} = require('mongoose')

const schema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        reeuired:true
    }
})

module.exports = model("Todo",schema)