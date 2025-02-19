const StaffCategory = require("../models/staffCategory");

module.exports.createStaffCategory=async(req,res)=>{
    try{
        data=req.body;
        staffcategory=new StaffCategory(data);
        savedstaffcategory= await staffcategory.save();
        res.status(200).send(savedstaffcategory);
    }
    catch(err){
        res.status(400).send(err)
    }
}
module.exports.getAllStaffCategory=async(req, res)=>{
    try{
        staffcategs=await StaffCategory.find();
        res.status(200).send(staffcategs);

    }
    catch(err){
        res.status(400).send(err);

    }
}
module.exports.getStaffCategoryById=async(req,res)=>{
    try{
        myid= req.params.id;
        staffcategory=await StaffCategory.findOne({_id:myid});
        res.status(200).send(staffcategory);
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports.deleteStaffCategory=async(req,res)=>{
    try{
        myid=req.params.id;
        staffcategory= await StaffCategory.findOneAndDelete({_id:myid});
        res.status(200).send(staffcategory);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.updateStaffCategory=async(req,res)=>{
    try{
        myid=req.params.id;
        data=req.body;
        updatedstaffcategory= await StaffCategory.findOneAndUpdate({_id:myid}, data);
        res.status(200).send(updatedstaffcategory);
    }
    catch(error){
        res.status(400).send(error)
    }
}