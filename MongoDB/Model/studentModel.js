const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    id:Number,
    name:String,
    standard:Number,
})

module.exports=mongoose.model("Student",schema);