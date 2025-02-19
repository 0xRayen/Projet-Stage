const mongoose= require("mongoose");
const Equipement = mongoose.model('Equipement',{
    libelle:{
        type:String,
        required:true,
    },
    typeEngin:{
        type:String,
        required:true,
    },
    reference:{
        type:String,
        required:true,
        unique:true,
    },
    numeroPrix:{
        type:String,
        required:true,
    },
    nbreHeure:{
        type:Number,
        required:true,
        default:0,
        
    },

})
module.exports= Equipement