const Unite = require("../models/unite");

module.exports.getAllUnits=async(req, res)=>{
    try{
        units= await Unite.find();
        res.status(200).send(units);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteUnit=async(req, res)=>{
    try{
        myid= req.params.id;
        deletedunit= await Unite.findOneAndDelete({_id: myid});
        res.status(200).send(deletedunit);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.createUnit=async(req, res)=>{
    try{
        data=req.body;
        newUnit= new Unite(data);
        savedUnit= await newUnit.save();
        res.status(200).send(savedUnit);
    }
    catch(error){
        res.status(400).json({code: 11000 , message: "Duplicate ky error: Username must be unique"});// sends an error of status 400 
        //and combine it with the json object that includes the code of mongo for uplicate keys which is username here
    }
}
