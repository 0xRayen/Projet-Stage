const Supadmin= require("../models/supadmin");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");

module.exports.loginSupadmin=async(req, res)=>{
    try{
        data=req.body;
        supadmin=await Supadmin.findOne({email: data.email});
        if(!supadmin){
            res.status(400).send("Email or Password invalid !");
        }
        else{
            validPass=bcrypt.compareSync(data.password, supadmin.password);
            if(!validPass){
                res.status(401).send("Email or Password invalid !");
            }
            else{
                payload={
                    _id:supadmin._id,
                    email: supadmin.email,
                    username: supadmin.username
                };
                token=jwt.sign( payload,"d56afb41ecf6c735c7bb38690c4e6893b8bf7ab530eb237e7b8227fc759c1fd1e79a2ed34d45192919e95e721f87b23c0ec4be3cfcbd439ad93356561b17e538a040a291b9cc349be1968a1e027f94c7bb770e8eea18651f5af1c5e9515537a3d0924fb36b0e3a693097eb8c521dc3a6c2b8b42d7c493380e85421066d07c5bd",  {expiresIn: '1hr'});// the sign is the same as the admin's and sup admin's
                res.status(200).send({mytoken: token});

            }
        }

    }
    catch(error){
        res.status(500).send(error);
    }
    
}
module.exports.addSupAdmin=async(req, res)=>{
    try{
        data=req.body;
        superadmin=new Supadmin(data);
        salt= bcrypt.genSaltSync(10);
        superadmin.password=bcrypt.hashSync(data.password, salt);
        savedsupadmin=await superadmin.save();
        res.status(200).send(savedsupadmin);
    }
    catch(error){
        res.status(400).send(error);
    }
    

}
module.exports.deleteSupAdmin=async(req, res)=>{
    try{
        myid= req.params.id;
        deletedsupadmin=await Supadmin.findOneAndDelete({_id:myid});
        res.status(200).send(deletedsupadmin);

    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getSupAdmins=async(req, res)=>{
    try{
        supadmins= await Supadmin.find();
        res.status(200).send(supadmins);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getSupAdminById=async(req, res)=>{
    try{
        myid=req.params.id;
        supadmin=await Supadmin.findOne({_id:myid});
        res.status(200).send(supadmin);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.updateSupAdmin=async(req, res)=>{
    try{
        data=req.body;
        myid=req.params.id;
        updatedsupAdmin=await Supadmin.findOneAndUpdate({_id:myid}, data);
        res.status(200).send(updatedsupAdmin);
    }
    catch(error){
        res.status(400).send(error);
    }
}