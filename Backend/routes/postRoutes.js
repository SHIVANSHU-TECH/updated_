const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  deletePost,
  updatePost,
  getAllPosts,
  LikeandDislike,
  comment,
} = require("../controllers/postControllers");

const protect = require("../middleware/protect");

router.get("/", protect, getPosts);
router.post("/", protect, createPost);
router.delete("/:id", protect, deletePost);
router.put("/:id", protect, updatePost);
router.get("/all", protect, getAllPosts);
router.get("/:id", protect, LikeandDislike);
router.post("/:id/comment", protect, comment);

module.exports = router;
