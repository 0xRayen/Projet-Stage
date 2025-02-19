const mongoose = require("mongoose");

const Operator = mongoose.model('Operator' , {
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
        default: "operator",
        immutable: true 
    },
});
module.exports = Operator;