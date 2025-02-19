const mongoose= require("mongoose");
const Materiel= mongoose.model("Materiel",{
    libelle:{
        type:String,
        required:true,
        unique:true,
    },
    numprix:{
        type:String,
        required:true,
    },
    unite:{
        type:String,
        required:true,
    },
});

module.exports= Materiel;