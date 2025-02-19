const mongoose = require("mongoose");

const Supadmin = mongoose.model('Supadmin' , {
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
    role: {
        type: String,
        default: "supadmin",
        immutable: true // Ensures the value cannot be changed once set
    }
});
module.exports= Supadmin;