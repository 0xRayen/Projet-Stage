const express= require("express");
const router= express.Router();
const { createProjet, getAllProjet, getProjetById, deleteProjet, updateProjet,
    AssociateEquipement, DissocierCategory, getAssociatedEquipements, getNonAssociatedEquipements,
    AssociateMaterial,DissocierMaterial,getAssociatedMaterials,getNonAssociatedMaterials,
    AssociateStaff,DissocierStaff,getAssociatedStaff,getNonAssociatedStaff,
    AssociateOperators,DissocierOperator,getAssociatedOperators,getNonAssociatedOperators
    

 } =require("../controllers/projet")


//Create Project
router.post("/create", createProjet);
// get all projects
router.get("/getall", getAllProjet);
// get a project by its id
router.get("/getbyid/:id", getProjetById);
//delete a project
router.delete("/delete/:id", deleteProjet);
//update a projet
router.put("/update/:id", updateProjet);
//equipement association ----------------------------------
router.post("/assocEquip/:id", AssociateEquipement);
//dissociate Equipement
router.post("/disssocEquip/:id", DissocierCategory);
//get associated Equip
router.get("/getAssocEquip/:id", getAssociatedEquipements);
//get NonAssociatedEquipe
router.get("/getNonAssocEquip/:id", getNonAssociatedEquipements);
// Materiel Association ----------------------------------
router.post("/assocMat/:id", AssociateMaterial);
//Dissociate Mat
router.post("/dissocMat/:id", DissocierMaterial);
//get Associated Mats
router.get("/getAssocMat/:id", getAssociatedMaterials);
//get NonAssociated Mats
router.get("/getNonAssocMat/:id", getNonAssociatedMaterials);
//Staff Association ----------------------------------
router.post("/assocStaff/:id",AssociateStaff);
//dissociate staff
router.post("/dissocStaff/:id", DissocierStaff);
//get assoc STAFF
router.get("/getAssocStaff/:id",getAssociatedStaff);
//get NonAssoc Staff
router.get("/getNonAssocStaff/:id", getNonAssociatedStaff);
//operator Association ----------------------------------
router.post("/assocOperator/:id", AssociateOperators);
//dissociate operators
router.post("/dissocOperator/:id", DissocierOperator);
// get assoc operators
router.get("/getAssocOperator/:id", getAssociatedOperators);
// get non assoc operators
router.get("/getNonAssocOperator/:id", getNonAssociatedOperators)





module.exports = router;