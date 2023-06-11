const User = require("../models/user");

const path = require("path");
const rootDir = require("../util/path");

exports.getIndex = (req, res, next) => {
  //console.log(users);
  res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.postAddUser = async(req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(email);
  const data = await User.create({name:name,email:email});
  //console.log(data);
  res.status(201).json({userDetails:data});
};

exports.getUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(201).json({ allUser: users });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async(req,res,next)=>{
  try {
    const uId = req.params.id;
    //console.log(uId);
    await User.destroy({ where: { id: uId } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

exports.updateUser = async(req,res,next)=>{
  const uId = req.params.id;
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  try{
    const user = await User.findByPk(uId);
    user.name= updatedName;
    user.email= updatedEmail;
    user.save();
  }
  catch(err){
    res.status(500).json(err);
  }
}
