const Category = require("../models/category");
module.exports.create=async(req,res)=>{
    try{
        data=req.body;
        category=new Category(data);
        savedCategory= await category.save();
        res.status(200).send(savedCategory);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getall=async(req,res)=>{
    try{
        categories= await Category.find();
        res.status(200).send(categories);

    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.getbyid=async(req, res)=>{
    try{
        myid=req.params.id;
        category= await Category.findOne({_id: myid});
        res.status(200).send(category);
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports.deleteCategory=async(req, res)=>{
    try{
        myid=req.params.id;
        deletedcategory=await Category.findOneAndDelete({_id: myid});
        res.status(200).send(deletedcategory);
    }
    catch(error){
        res.status(400).send(error);
    }
}