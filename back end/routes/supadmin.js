const express = require("express");
const { loginSupadmin, addSupAdmin, deleteSupAdmin , getSupAdmins, getSupAdminById, updateSupAdmin} = require("../controllers/supadmin");
const router= express.Router();


//login supadmin 
router.post("/login", loginSupadmin);
//adding a new SupAdmin 
router.post("/addsuperadmin", addSupAdmin);
//delete a supAdmin
router.delete("/delete/:id", deleteSupAdmin);
//get supadmins
router.get("/getall", getSupAdmins);
//get supAdminByid
router.get("/getbyid/:id",getSupAdminById);
//update SupaAdmin
router.put("/update/:id", updateSupAdmin);



module.exports= router;