const express= require("express");
const router= express.Router();
const { loginAdmin, getAdmins, getadminbyid, deleteadmin, addAdmin, updateAdmin } = require("../controllers/adminController");

//login admin 

router.post("/login", loginAdmin);
// reading all admins 

router.get("/getadmins",getAdmins);
//reading an Admin by his id 

router.get("/getadminbyid/:id",getadminbyid);
//deleting admin

router.delete("/deleteadminbyid/:id",deleteadmin);
//Adding an admin
router.post("/addAdmin",addAdmin);
//update Admin
router.put("/updateAdmin/:id", updateAdmin);


module.exports= router;
