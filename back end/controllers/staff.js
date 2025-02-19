const Staff= require("../models/staff");
const Category=require("../models/staffCategory");

module.exports.createStaff=async(req,res)=>{
    try{
        data=req.body;
        staff=new Staff(data);
        savedstaff= await staff.save();
        res.status(200).send(savedstaff);
    }
    catch(error){
        res.status(400).send(error)
    }
    
}
module.exports.getAllStaff=async(req, res)=>{
    try{
        staff= await Staff.find();
        res.status(200).send(staff);
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports.getStaffById=async(req,res )=>{
    try{
        myid=req.params.id;
        staffmember = await Staff.findOne({_id: myid});
        res.status(200).send(staffmember);
    }
    catch(err){
        res.status(400).send(err)
    }
}
module.exports.deleteStaff=async(req, res)=>{
    try{
        myid= req.params.id;
        staffmember= await Staff.findOneAndDelete({_id:myid});
        res.status(200).send(staffmember);

    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports.updateStaff=async(req,res)=>{
    try{
        data=req.body;
        myid=req.params.id;
        updatedstaff=await Staff.findOneAndUpdate({_id:myid}, data, { new: true });
        res.status(200).send(updatedstaff);
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports.associateCategory=async(req,res)=>{
    try{
        const staffId=req.params.idp;
        const categoryId=req.body;
        const staff= await Staff.findOne({_id:staffId});
        if(!staff){
            return res.status(404).send("Staff not found ! ")
        }
        if(!staff.categories.includes(categoryId)){
            staff.categories.push(categoryId);
        }
        await staff.save();
        res.status(200).send(staff);
    }
    catch(error){
        console.error("error",error);
        res.status(400).send({ message: 'Error adding category to the staff', error: error.message });

    }
}
module.exports.VerifContainCateg = async (req, res) => {
  try {
    const staffId = req.params.id; // Extract the personnel ID from the route parameter
    const { categoryId } = req.body; // Extract the category ID from the request body

    // Validate inputs
    if (!categoryId) {
      return res.status(400).send({ message: "Category ID is required!" });
    }

    // Find the personnel by ID
    const staff = await Staff.findOne({ _id: staffId });
    if (!staff) {
      return res.status(404).send({ message: "Staff not found!" });
    }

    // Check if the categories array contains the given category ID
    const containsCategory = staff.categories.includes(categoryId);
    console.log('contains category in back:', containsCategory)

    // Respond with the result
    res.status(200).send( containsCategory );
  } catch (error) {
    console.error("Error verifying category:", error);
    res.status(500).send({
      message: "An error occurred while verifying the category.",
      error: error.message,
    });
  }
}
//get all UNassigned Categories
module.exports.getNonAssociesCategs=async(req, res)=>{
    try{
        const staffId=req.params.id;
        const categories=await Category.find();
        const staff = await Staff.findOne({_id:staffId});
        if(!staff){
            res.status(404).send("Personnel not found !");
        }
        const unassociatedCategories = categories.filter(
            (category) => !staff.categories.some((assocCat) => assocCat._id.equals(category._id))
          );
        res.status(200).send(unassociatedCategories);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.DeleteCateg=async(req,res)=>{
    try{
        const categId=req.body;
        const staffId=req.params.idStaff;
        const staff= await Staff.findOne({_id: staffId});
        if(!staff){
            return res.status(404).send("Personnel not Found !");
        }
        const category= await Category.findOne({_id: categId});
        if(!category){
            return res.status(404).send("Categorie not found !");
        }
        for(let i=0;i<staff.categories.length;i++){
            console.log("staff category"+staff.categories[i]._id);
            if(staff.categories[i]._id==categId._id){
                staff.categories.splice(i, 1);
                await staff.save();
                return res.status(200).send(staff)
            }
        }
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getCategories=async(req,res)=>{
    try{
        staffId=req.params.idpers;
        staff=await Staff.findOne({_id: staffId});
        categories=await Category.find({_id:staff.categories});
        res.status(200).send(categories);
    }
    catch(error){
        res.status(200).send(error)
    }
}


