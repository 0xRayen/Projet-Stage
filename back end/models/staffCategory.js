const mongoose=require("mongoose");
const StaffCategory=mongoose.model("StaffCategory",{
    title:{
        type:String,
        required: true,
        unique:true,
    },
    hourlyrate:{
        type:Number,
        required: true
    }
});
module.exports=StaffCategory;