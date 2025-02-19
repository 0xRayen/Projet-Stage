const mongoose=require("mongoose");
const Category= mongoose.model("Category",{
    titre:{
        type: String,
        required: true,
    },
    type:{
            type:String,
            enum:["materiel","equipement"],
            default:"materiel",
            required:true,

    },
    materiels:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"materiel",
            default:[]
        }
    ],
    equipements:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"equipement",
            default:[]
        }
    ]
    
});


module.exports = Category;
