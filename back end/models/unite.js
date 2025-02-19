const mongoose= require("mongoose");
const Unite= mongoose.model("Unite",{
    libelle:{
        type:String,
        required: true,
        unique:true,
    }
});
module.exports= Unite;