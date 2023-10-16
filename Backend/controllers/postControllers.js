const { default: mongoose } = require("mongoose");
const Post = require("../models/postModel");
const User = require("../models/userModel");

const createPost = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      res.status(500).json({ message: "Unauthorized" });
    }
    const { message, image } = req.body;
    const post = new Post({
      createdBy: req.user._id,
      message,
      image,
    });

    await post.save();
    user.posts.push(post._id);
    await user.save();

    const populatedPost = await Post.findById(post._id)
      .populate("createdBy", "_id name email image")
      .populate("likes", "_id name email image")
      .populate("comments.user", "_id name email image");

    res
      .status(201)
      .json({ post: populatedPost, message: "Post created successfully" });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({ createdBy: req.user._id })
      .populate("createdBy", "_id name email image")
      .populate("likes", "_id name email image")
      .populate("comments.user", "_id name email image");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      createdBy: { $ne: req.user._id },
    })
      .populate("createdBy", "_id name email image")
      .populate("likes", "_id name email image")
      .populate("comments.user", "_id name email image");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.createdBy.toString() !== req.user._id.toString()) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    await Post.deleteOne({ _id: req.params.id });

    const user = await User.findById(req.user._id);
    user.posts.pull(req.params.id);
    await user.save();

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      {
        _id: req.params.id,
        createdBy: req.user._id,
      },
      { message: req.body.message, image: req.body.image },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const LikeandDislike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(400).json({ message: "Post not found" });
    }

    if (!post.likes.includes(req.user._id)) {
      post.likes.push(req.user._id);
      await post.save();

      // Populate likes array with user details
      await post.populate("likes", "_id name email image");

      return res.status(200).json({ message: "Liked Successfully", post });
    } else {
      const index = post.likes.indexOf(req.user._id);
      post.likes.splice(index, 1);
      await post.save();

      // Populate likes array with user details
      await post.populate("likes", "_id name email image");

      return res.status(200).json({ message: "Disliked Successfully", post });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const comment = async (req, res) => {
  try {
    console.log(req.body);
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Comment not found" });

    const post = await Post.findById(req.params.id)
      .populate("createdBy", "_id name email image")
      .populate("likes", "_id name email image")
      .populate("comments.user", "_id name email image");
    if (!post) {
      return res.status(400).json({ error: "Post Not Found" });
    }

    let isExist = -1;
    post.comments.forEach((item, index) => {
      if (item.user._id.toString() === req.user._id.toString()) {
        isExist = index;
      }
    });

    if (
      isExist != -1 &&
      post.comments[isExist].user._id.toString() === req.user._id.toString()
    ) {
      post.comments[isExist].comment = message;
    } else {
      post.comments.push({ user: req.user._id, comment: message }); // Use 'message' instead of 'comment'
    }
    await post.save(); // Moved this line outside of the forEach loop

    return res
      .status(200)
      .json({ message: "Comment added successfully", post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const DeleteComment = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "comment not found" });
    const post = await Post.find(req.params.id);
    if (!post) {
      return res.status(400).json({ error: "Post Not Found" });
    }

    post.comments.push({ user: req.user._id }, { comment: message });
    post.save();
    req.res.status(200).json({ message: "comment added successFully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getAllPosts,
  deletePost,
  updatePost,
  LikeandDislike,
  comment,
};
