const Rapport = require("../models/rapport");


module.exports.createRapport=async(req,res)=>{
    try{
        data=req.body;
        rapport=new Rapport(data);
        rapport.dateCreation= new Date();
        savedrapport= await rapport.save();
        res.status(200).send(savedrapport);
    }
    catch(err){
        res.status(400).send(err)
    }
}
module.exports.getallRapports=async(req, res)=>{
    try{
        reports= await Rapport.find();
        res.status(200).send(reports);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getRapportById=async(req,res)=>{
    try{
        myid=req.params.id;
        rapport= await Rapport.findOne({_id:myid});
        res.status(200).send(rapport);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteRapport=async(req,res)=>{
    try{
        myid=req.params.id;
        rapportdeleted=await Rapport.findOneAndDelete({_id: myid});
        res.status(200).send(rapportdeleted);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.updateRapport=async(req,res)=>{
    try{
        myid=req.params.id;
        data=req.body;
        updatedRapport=await Rapport.findOneAndUpdate({_id:myid}, data);
        res.status(200).send(updatedRapport);
    }
    catch(error){
        res.status(400).send(error)
    }
}