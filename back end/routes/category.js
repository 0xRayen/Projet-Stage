const express= require("express");
const router = express.Router();
const {create, getall, getbyid, deleteCategory}=require("../controllers/categoryController");

//Create Category -------------------------------------------------------
router.post("/create" ,create);
// get all categories -------------------------------------------------------
router.get("/getall",getall);
//get category by id
router.get("/getbyid/:id",getbyid);
//delete category
router.delete("/delete/:id",deleteCategory);

module.exports= router;
