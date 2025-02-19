const express= require("express");
const { getAllUnits, deleteUnit, createUnit } = require("../controllers/unite");
const router= express.Router();


// getall units
router.get("/getall",getAllUnits);
//delete a unit
router.delete("/delete/:id", deleteUnit);
//create a unit
router.post("/create", createUnit);
module.exports = router;