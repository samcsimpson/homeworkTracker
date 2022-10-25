const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const User = require("../models/User");
const fs = require('fs')
const http = require('http'); // or 'https' for https:// URLs


module.exports = {
  getProfile: async (req, res) => {
    try {
      if(req.user.teacher == false) {
        const posts = await Post.find({ user: req.user.id });
        res.render("profile.ejs", { posts: posts, user: req.user });
      } else {
        const posts = await Post.find({ class: req.user.class }).sort({marked: 1, createdAt: 1});
        count = posts.length
        for (i of posts){
          if (i.marked){
            count--
          }
        }
        res.render("profile.ejs", { posts: posts, user: req.user, count: count });
      }
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comment.find({post: req.params.id}).sort({ createdAt: 'desc'}).lean();
      const author = await User.findById(post.user);
      res.render("post.ejs", { post: post, user: req.user, comments: comments, author: author.userName });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        title: req.body.title,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        caption: req.body.caption,
        user: req.user.id,
        class: req.user.class,
      });
      console.log("Post has been added!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },

  deletePost: async (req, res) => {
    try {
      // Find post by id
      console.log(req.params.id)
      let post = await Post.findById({ _id: req.params.id });
      let comments = await Comment.find({ post: req.params.id });

      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });

      // Delete associated comments from cloudinary and db
      for(var i of comments) {
        await cloudinary.uploader.destroy(i.cloudinaryId)
        await Comment.remove({ post: i.post });
      }
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      console.log(err)
      res.redirect("/profile");
    }
  },
  
};
