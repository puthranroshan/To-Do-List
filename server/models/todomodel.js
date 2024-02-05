const mongoose =require('mongoose');

const ToDoScehma=new mongoose.Schema({
    todo:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("todo",ToDoScehma);