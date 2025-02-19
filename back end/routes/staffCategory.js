const express= require("express");
const router = express.Router();
const{ createStaffCategory, getAllStaffCategory, deleteStaffCategory, getStaffCategoryById, updateStaffCategory }=require("../controllers/staffCategory");



//Create a StaffCtaegory-------------------------------------------------
router.post("/create", createStaffCategory);
// get all staffcategories -------------------------------------------------
router.get("/getall", getAllStaffCategory);
//get a staffcategoty by its id-------------------------------------------------
router.get("/getbyid/:id", getStaffCategoryById);
//delete a staffcategory-------------------------------------------------
router.delete("/delete/:id", deleteStaffCategory);
//update a staffCategory -------------------------------------------------
router.put("/update/:id", updateStaffCategory);

module.exports = router;
