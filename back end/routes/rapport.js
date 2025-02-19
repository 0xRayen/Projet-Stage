const express= require("express");
const router= express.Router();
const { createRapport, getallRapports, getRapportById, deleteRapport, updateRapport } = require("../controllers/rapport")

//Create a report 
router.post("/create", createRapport);
//get all reports 
router.get("/getall",getallRapports );
//get a report by its id 
router.get("/getbyid/:id", getRapportById);
//delete a report 
router.delete("/delete/:id", deleteRapport);
//edit a report
router.put("/update/:id", updateRapport);

module.exports = router;
