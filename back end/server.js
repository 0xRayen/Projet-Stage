const express= require("express");
const cors = require('cors');
const adminRoute=require("./routes/admin");
const supAdminRoute=require("./routes/supadmin");
const operatorRoute=require("./routes/operator");
const categoryRoute=require("./routes/category");
const staffRoute=require("./routes/staff");
const staffCategoryRoute=require("./routes/staffCategory");
const equipementRoute=require("./routes/equipement");
const materielRoute=require("./routes/materiel");
const projetRoute=require("./routes/projet");
const rapportRoute=require("./routes/rapport");
const uniteRoute=require("./routes/unite");
require("./config/connect");
const app=express();
app.use(cors({
    origin: 'http://localhost:4200' // Replace with the actual origin if different
  }));
app.use(express.json());//so the app could read data of type json
app.use('/admin',adminRoute);
app.use('/supadmin',supAdminRoute);
app.use('/operator',operatorRoute);
app.use('/category',categoryRoute);
app.use("/staff",staffRoute);
app.use("/staffCategory",staffCategoryRoute);
app.use("/equipement",equipementRoute);
app.use("/materiel",materielRoute);
app.use("/projet",projetRoute);
app.use("/rapport",rapportRoute);
app.use("/unite",uniteRoute);

app.listen(3000, ()=>{
    console.log("server works !");
});