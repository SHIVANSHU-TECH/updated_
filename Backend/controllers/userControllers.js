const generateToken = require("../config/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const Post = require("../models/postModel");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email  || !password) {
      return res.status(400).json({success:false, error: "Filled the required entity" });
    }
    const userFind = await User.findOne({ email });
    if (userFind) {
      return res.status(400).json({ success:false,error: "User already present" });
    } else {
      const user = await User.create({ name, email, password });
      return res.status(200).json({
        success:true,
        message: "User created Successfuly",
        user,
        token: generateToken(user._id),
      });
    }
  } catch (err) {
    return res
      .status(400)
      .json({success:false, message: "Internal Server Error", error: `${err}` });
  }
};

const updateUser = async (req, res, next) => {
  let user = await User.findById(req.user._id);

  if (!user) {
    return res.status(400).json({ success:false,message: "User not found" });
  }

  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 12);
  }

  user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,

    useFindAndModify: false,
  });
  return res
    .status(200)
    .json({ success:true, message: "updated the user", user });
};

const loadUser = async (req, res) => {
  try {
    // console.log(req.user);
    return res.status(200).json({ success:true, user: req.user });
  } catch (error) {
    return res.status(500).json({success:false,message:"Login required"});
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({success:false, message: "user Not found" });
    }
  

    if (user && (await bcrypt.compare(password, user.password))) {
      return res.status(200).json({success:true, user, token: generateToken(user._id) });
    } else {
      return res.status(400).json({success:false, error: "Invalid Email or Password" });
    }
  } catch (error) {
    return res.status(400).json({success:false, error: error.message });
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);

    if (!user) {
      return res.status(400).json({success:true, message: "User not found" });
    }

    const posts = user.posts;
    for (let i in posts) {
      await Post.findByIdAndDelete(i);
    }

    res
      .status(200)
      .json({ success:true, message: "Successfully Deleted the user" });
  } catch (error) {
    return res.status(400).json({success:false, message: error.message });
  }
};



module.exports = {
  createUser,
  login,
  deleteUser,
  updateUser,
   loadUser

};
