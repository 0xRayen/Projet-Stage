const express= require("express");
const router = express.Router();
const{ createMateriel, getallMateriel, getMaterielById, deleteMateriel, updateMateriel, getMaterialWithoutCategory }=require("../controllers/materiel");

//create Materiel
router.post("/create", createMateriel);
//get all materiels
router.get("/getall", getallMateriel);
//get a materiel by id
router.get("/getbyid/:id", getMaterielById);
// delete a mat
router.delete("/delete/:id", deleteMateriel);
//update a mat
router.put("/update/:id", updateMateriel);
//get Materials without categories
router.get("/getCategoryNull",getMaterialWithoutCategory);

module.exports= router;
