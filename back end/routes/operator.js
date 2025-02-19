const express = require("express");
const router= express.Router();
const { loginOperator, getallOperators, getOperatorById, addOperator, deleteOperator, updateOperator } =require("../controllers/operator");
//login Operator
router.post("/login", loginOperator);
//reading all operators
router.get("/getoperators", getallOperators);
// reading a single operator by id 
router.get("/getoperatorbyid/:id", getOperatorById);
// adding an operator 
router.post("/addoperator", addOperator);
// deleting an operator 
router.delete("/deleteoperator/:id",deleteOperator);
// update an Operator
router.put("/update/:id" ,updateOperator)

module.exports= router;