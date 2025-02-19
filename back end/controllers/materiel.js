const Materiel = require("../models/materiel");


module.exports.createMateriel=async(req, res)=>{
    try{
        data= req.body;
        materiel= new Materiel(data);
        savedmateriel= await materiel.save();
        res.status(200).send(savedmateriel);
    }
    catch(error){
        res.status(400).send(error);
    }
    
}
module.exports.getallMateriel=async( req, res)=>{
    try{
        mats=await Materiel.find();
        res.status(200).send(mats);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getMaterielById=async(req, res)=>{
    try{
        myid=req.params.id;
        mat= await Materiel.findOne({_id: myid});
        res.status(200).send(mat);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteMateriel=async(req, res)=>{
    try{
        myid= req.params.id;
        deletedmat= await Materiel.findOneAndDelete({_id: myid});
        res.status(200).send(deletedmat);
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports.getMaterialWithoutCategory=async(req ,res)=>{
    try{
        materials=await Materiel.find({categorie: null});
        res.status(200).send(materials);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.updateMateriel=async(req, res)=>{
    try{
        data=req.body;
        myid=req.params.id;
        updatedmat=await Materiel.findOneAndUpdate({_id: myid}, data);
        res.status(200).send(updatedmat);
    }
    catch(error){
        res.status(400).send(error);
    }
}