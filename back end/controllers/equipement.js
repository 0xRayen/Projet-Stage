const Equipement = require("../models/equipement");
module.exports.createEquipement=async(req, res)=>{
    try{
        data= req.body;
        equipement= new Equipement(data);
        savedequipement= await equipement.save();
        res.status(200).send(savedequipement);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getallEquipement= async(req, res)=>{
    try{
        equipements= await Equipement.find();
        res.status(200).send(equipements);

    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getEquipementsWithoutCategory= async(req, res)=>{
    try{
        equipements= await Equipement.find({categorie: null});
        res.status(200).send(equipements);

    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.GetEquipementbyid=async(req, res)=>{
    try{
        myid= req.params.id;
        equipement= await Equipement.findOne({_id: myid});
        res.status(200).send(equipement);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteEquipement=async(req, res)=>{
    try{
        myid=req.params.id;
        deletedeq=await Equipement.findOneAndDelete({_id:myid});
        res.status(200).send(deletedeq);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.updateEquipement=async(req, res)=>{
    try{
        myid=req.params.id;
        data=req.body;
        neweq= await Equipement.findOneAndUpdate({_id: myid}, data);
        res.status(200).send(neweq);
    }
    catch(error){
        res.status(400).send(error);
    }
}