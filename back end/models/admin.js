const mongoose = require("mongoose");

const Admin = mongoose.model('Admin' , {
    username:{
        type: String,
        required: true,
        unique:true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true
    },
    projets:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Porjet",
    },
    role: {
        type: String,
        default: "admin",
        immutable: true // Ensures the value cannot be changed once set
    }
});
module.exports= Admin;