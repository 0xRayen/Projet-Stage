const express= require("express");
const router= express.Router();
const{ createEquipement, getallEquipement, GetEquipementbyid, deleteEquipement, updateEquipement, getEquipementsWithoutCategory }=require("../controllers/equipement")

//Create Equipement
router.post("/create",createEquipement);
// get all equipement
router.get("/getall",getallEquipement);
// get equipement by id
router.get("/getbyid/:id",GetEquipementbyid);
// delte equipement
router.delete("/delete/:id", deleteEquipement);
// update equipement
router.put("/update/:id", updateEquipement);
//get Equipement without Category
router.get("/getCategoryNull", getEquipementsWithoutCategory);

module.exports= router;