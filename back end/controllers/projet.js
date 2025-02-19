const Projet = require("../models/Projet");
const Equipement= require("../models/equipement");
const Materiel= require("../models/materiel");
const Staff= require("../models/staff");
const Operator= require("../models/operator");

module.exports.createProjet=async(req, res)=>{
    try{
        data=req.body;
        projet=new Projet(data);
        savedprojet= await projet.save();
        res.status(200).send(savedprojet);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getAllProjet=async(req,res)=>{
    try{
        projets=await Projet.find();
        res.status(200).send(projets);
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.getProjetById=async(req, res)=>{
    try{
        myid=req.params.id;
        projet=await Projet.findOne({_id: myid});
        res.status(200).send(projet);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteProjet=async(req, res)=>{
    try{
        myid=req.params.id;
        deletedprojet= await Projet.findOneAndDelete({_id: myid});
        res.status(200).send(deletedprojet);
    }
    catch(error){  
        res.status(400).send(error);
    }
}
module.exports.updateProjet=async(req, res)=>{
    try{
        myid=req.params.id;
        data=req.body;
        projet= await Projet.findOneAndUpdate({_id: id}, data);
        res.status(200).send(projet)
    }
    catch(error){
        res.status(400).send(error);
    }
}
//Equipement association ----------------------------------
module.exports.AssociateEquipement=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const equipementId=req.body;
        const projet=await Projet.findOne({_id:projetId});
        if(!projet){
            res.status(404).send("projet not found !");
        }
        if(!projet.equipements.includes(equipementId)){
            projet.equipements.push(equipementId);
        }
        await projet.save();
        res.status(200).send(projet)
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.DissocierCategory=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const equipementId=req.body;
        const projet= await Projet.findOne({_id:projetId});
        if(!projet){
            res.status(404).send("Projet not found!");
        }
        const equipement= await Equipement.findOne({_id:equipementId});
        if(!equipement){
            res.status(404).send("Equipement not found !");
        }
        for(let i=0;i<projet.equipements.length;i++){
            if(projet.equipements[i]._id==equipementId._id){
                projet.equipements.splice(i, 1);
                await projet.save();
                return res.status(200).send(projet);
            }
        }

    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getAssociatedEquipements=async(req, res)=>{
    try{
        const projetId=req.params.id;
        projet=await  Projet.findOne({_id:projetId});
        equipements= await Equipement.find({_id:projet.equipements});
        res.status(200).send(equipements);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getNonAssociatedEquipements=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const equipements= await Equipement.find();
        const projet=await Projet.findOne({_id: projetId});
        if(!projet){
            res.status(404).send("Projet not found !")
        }
        const unAssociatedEquipemets= equipements.filter(
            (equipement)=> !projet.equipements.some((assocEquip)=> assocEquip._id.equals(equipement._id))
        );
        res.status(200).send(unAssociatedEquipemets);


    }
    catch(error){
        res.status(400).send(error);
    }
}
// Material association ----------------------------------
module.exports.AssociateMaterial=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const materialId=req.body;
        const projet= await Projet.findOne({_id: projetId});
        if(!projet){
            res.status(404).send("Projet not found");
        }
        if(!projet.materiels.includes(materialId)){
            projet.materiels.push(materialId);
        }
        await projet.save();
        res.status(200).send(projet);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.DissocierMaterial=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const materialId= req.body;
        projet=await Projet.findOne({_id:projetId});
        if(!projet){
            res.status(404).send("Proejt not found !");
        }
        material=await Materiel.findOne({_id: materialId});
        if(!material){
            res.status(404).send("Material not found !");
        }
        for(let i=0;i<projet.materiels.length;i++){
            if(projet.materiels[i]._id==materialId._id){
                projet.materiels.splice(i, 1);
                await projet.save();
                return res.status(200).send(projet);
            }
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.getAssociatedMaterials=async(req, res)=>{
    try{
        const projetId=req.params.id;
        projet= await Projet.findOne({_id:projetId});
        associatedMaterdials=await Materiel.find({ _id: projet.materiels });
        res.status(200).send(associatedMaterdials);

    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.getNonAssociatedMaterials=async(req, res)=>{
    try{
        const projetId=req.params.id;
        projet = await Projet.findOne({_id: projetId});
        if(!projet){
            res.status(404).send("Projet not found !");
        }
        materials= await Materiel.find();
        const unAssociatedMaterials= materials.filter(
            (material)=> !projet.materiels.some((assocMat)=> assocMat._id.equals(material._id))
        );
        res.status(200).send(unAssociatedMaterials);

    }
    catch(error){
        res.status(200).send(error)
    }
}
//Staff Association -------------------------------------------
module.exports.AssociateStaff=async(req,res)=>{
    try{
        const projetId=req.params.id;
        const staffId=req.body;
        projet = await Projet.findOne({_id: projetId});
        if(!projet){
            res.status(404).send("Projet not found !");
        }
        if(!projet.personnels.includes(staffId)){
            projet.personnels.push(staffId);
        }
        await projet.save();
        res.status(200).send(projet);

    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.DissocierStaff=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const staffId=req.body;
        projet=await Projet.findOne({_id: projetId});
        if(!projet){
            res.status(404).send("Projet not found !");
        }
        const staff= Staff.findOne({_id: staffId});
        if(!staff){
            res.status(404).send("Personnem not found !");
        }
        for(let i=0;i<projet.personnels.length;i++){
            if(projet.personnels[i]._id==staffId._id){
                projet.personnels.splice(i ,1);
                await projet.save();
                return res.status(200).send(projet);
            }
        }
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.getAssociatedStaff=async(req,res)=>{
    try{
        const projetId=req.params.id;
        projet= await Projet.findOne({_id: projetId});
        staff= await Staff.find({_id: projet.personnels});
        res.status(200).send(staff);
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.getNonAssociatedStaff=async(req,res)=>{
    try{
        const projetId=req.params.id;
        const staff=await Staff.find();
        const projet=await Projet.findOne({_id:projetId});
        if(!projet){
            res.status(404).send("Projet not found !");
        }
        const unAssociatedStaff = staff.filter(
            (personnel) => !projet.personnels.some((assocStaff) => assocStaff._id.equals(personnel._id))
          );
        res.status(200).send(unAssociatedStaff);
    }
    catch(error){
        res.status(400).send(error);
    }
}
//Operator Association -------------------------------------------
module.exports.AssociateOperators=async(req, res)=>{
    try{
        const projetId=req.params.id;
        const OperatorId=req.body;
        projet=await Projet.findOne({_id:projetId});
        if(!projet){
            return res.status(404).send("projet not found !");
        }
        if(!projet.operateurs.includes(OperatorId)){
            projet.operateurs.push(OperatorId);
        }
        await projet.save();
        res.status(200).send(projet);

    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.DissocierOperator=async(req,res)=>{
    try{
        const projetId=req.params.id;
        const OperatorId=req.body;
        projet= await Projet.findOne({_id:projetId});
        if(!projet){
            res.status(404).send("projet not found !");
        }
        operator=await Operator.findOne({_id: OperatorId});
        if(!operator){
            res.status(404).send("Operator not found !");
        }
        for(let i=0;i<projet.operateurs.length;i++){
            if(projet.operateurs[i]._id==OperatorId._id){
                projet.operateurs.splice(i, 1);
                await projet.save();
                return res.status(200).send(projet);

            }
        }
    }
    catch(error){
        res.status(400).send(error)

    }
}
module.exports.getAssociatedOperators=async (req,res)=>{
    try{
        const projetId=req.params.id;
        projet=await Projet.findOne({_id: projetId});
        operators= await Operator.find({_id: projet.operateurs});
        res.status(200).send(operators);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getNonAssociatedOperators= async(req,res)=>{
    try{
        const projetId=req.params.id;
        const operators=await Operator.find();
        const projet= await Projet.findOne({_id: projetId});
        if(!projet){
            res.status(404).send("Projet not found !");
        }
        unassociatedOperators = operators.filter(
            (op)=>!projet.operateurs.some((assocOp)=> assocOp._id.equals(op._id))
        );
        res.status(200).send(unassociatedOperators);

    }
    catch(error){
        res.status(400).send(error)

    }
}