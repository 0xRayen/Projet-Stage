const bcrypt= require("bcrypt");
const Operator= require("../models/operator");
const jwt =require("jsonwebtoken");
module.exports.loginOperator=async(req, res)=>{
    try{
        data= req.body;
        operator=await Operator.findOne({email:data.email});
        if(!operator){
            res.status(404).send("Email or Password invalid !");
        }
        else{
            validPass=bcrypt.compareSync(data.password, operator.password);
            if(!validPass){
                res.status(404).send("Email or Password invalid !");
            }
            else{
                payload={
                    _id:operator._id,
                    email:operator.email,
                    username:operator.username
                }
                token=jwt.sign(payload, "d56afb41ecf6c735c7bb38690c4e6893b8bf7ab530eb237e7b8227fc759c1fd1e79a2ed34d45192919e95e721f87b23c0ec4be3cfcbd439ad93356561b17e538a040a291b9cc349be1968a1e027f94c7bb770e8eea18651f5af1c5e9515537a3d0924fb36b0e3a693097eb8c521dc3a6c2b8b42d7c493380e85421066d07c5bd",  { expiresIn: '1h' });// the sign is the same as the admin's and sup admin's
                res.status(200).send({mytoken: token});
            }
        }

    }
    catch(error){
        res.status(500).send(error);
    }
}
module.exports.getallOperators=async(req,res)=>{
    try{
        operators= await Operator.find();
        res.status(200).send(operators);
    }
    catch(err){
        res.status(400).send(err);
    }
}
module.exports.getOperatorById=async(req,res)=>{
    try{
        myid=req.params.id;
        operator=await Operator.findOne({_id: id});
        res.status(200).send(operator)
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.addOperator=async(req, res)=>{
    try{
        data=req.body;
        operator=new Operator(data);
        salt=bcrypt.genSaltSync(10);
        operator.password= bcrypt.hashSync(data.password, salt);
        savedOperator=await operator.save();
        res.status(200).send(savedOperator);

    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteOperator=async(req,res)=>{
    try{
        myid=req.params.id;
        operator= await Operator.findOneAndDelete({_id:myid});
        res.status(200).send(operator);    
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.updateOperator=async(req, res)=>{
    try{
        myid= req.params.id;
        data=req.body;
        updatedOperator=await Operator.findOneAndUpdate({_id: myid}, data);
        res.status(200).send(updatedOperator);
    }
    catch(error){
        res.status(400).send(error)
    }
}