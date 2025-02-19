const express=require("express");
const { createStaff, getAllStaff, getStaffById, deleteStaff, updateStaff, associateCategory, VerifContainCateg, getNonAssociesCategs, DeleteCateg, getCategories } = require("../controllers/staff");
const router = express.Router();

//Create Staff 
router.post("/create", createStaff);
//get all staff 
router.get("/getall", getAllStaff);
//get a staff member by its id 
router.get("/getbyid/:id", getStaffById);
//delete a staff member 
router.delete("/delete/:id", deleteStaff);
// update staff member 
router.put("/update/:id", updateStaff);
// add category to staff
router.post("/associateCategory/:idp",associateCategory);
//verify if category is associated
router.post("/verifyCategory/:id", VerifContainCateg);
//get UNassociated categories
router.get("/getUnassociatedCategories/:id",getNonAssociesCategs);
//delete categories
router.post("/deleteCateg/:idStaff", DeleteCateg);
//get the full Categories not just the id
router.get("/getCategories/:idpers",getCategories);
module.exports = router;