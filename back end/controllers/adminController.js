const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports.loginAdmin = async (req, res) => {
  try {
    data = req.body;
    const admin = await Admin.findOne({ email: data.email });
    if (!admin) {
      res.status(404).send(" Email or Password invalid !");
    } else {
      validPass = data.password == admin.password;
      if (!validPass) {
        res.status(401).send(" Email or Password invalid !");
      } else {
        payload = {
          _id: admin._id,
          email: admin.email,
          username: admin.username,
        };
        token = jwt.sign(
          payload,
          "d56afb41ecf6c735c7bb38690c4e6893b8bf7ab530eb237e7b8227fc759c1fd1e79a2ed34d45192919e95e721f87b23c0ec4be3cfcbd439ad93356561b17e538a040a291b9cc349be1968a1e027f94c7bb770e8eea18651f5af1c5e9515537a3d0924fb36b0e3a693097eb8c521dc3a6c2b8b42d7c493380e85421066d07c5bd",
          { expiresIn: "1h" }
        );
        res.status(200).send({ mytoken: token });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.getAdmins = async (req, res) => {
  try {
    admins = await Admin.find();
    res.status(200).send(admins);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports.getadminbyid = async (req, res) => {
  try {
    myid = req.params.id;
    admin = await Admin.findOne({ _id: myid });
    res.status(200).send(admin);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports.deleteadmin = async (req, res) => {
  try {
    myid = req.params.id;
    admintodelete = await Admin.findOneAndDelete({ _id: myid });
    res.status(200).send(admintodelete);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports.addAdmin = async (req, res) => {
  try {
    data = req.body;
    admintoadd = new Admin(data);
    salt = bcrypt.genSaltSync(10);
    admintoadd.password = bcrypt.hashSync(data.password, salt);
    savedadmin = await admintoadd.save();
    res.status(200).send(savedadmin);
  } catch (error) {
    res.status(400).send(error);
  }
};
module.exports.updateAdmin = async (req, res) => {
  try {
    data = req.body;
    myid = req.params.id;
    updatedAdmin = await Admin.findOneAndUpdate({ _id: myid }, data);
    res.status(200).send(updatedAdmin);
  } catch (error) {
    res.status(400).json({
      code: 11000,
      message: "Duplicate ky error: Unite must be unique",
    }); // sends an error of status 400
    //and combine it with the json object that includes the code of mongo for uplicate keys which is username here
  }
};
