const express = require("express");
const { Router } = require("express");

const {
  createUser,
  login,
  deleteUser,
  updateUser,
  getUsers,
  FollowUnfollow,
  singleUser,

  loadUser,

} = require("../controllers/userControllers");

const protect = require("../middleware/protect");
const router = express.Router();

// router.get('/',async(req,res)=>{
//     res.send("It worked ");

// })

router.route("/").post(createUser);
router.route("/login").post(login);
router.route("/load").get(protect, loadUser);
router.route("/log/update").put(protect, updateUser);
router.route("/log/delete").delete(protect, deleteUser);


module.exports = router;
