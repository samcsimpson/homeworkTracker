const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comment = require("../models/Comment")
module.exports = {
  createComment: async (req, res) => {
    try {
      console.log(1)
      console.log(req)
      console.log(2)
      console.log(req.file)
      console.log(3)
      console.log(req.file.path)
      const result = await cloudinary.uploader.upload(req.file.path);

      await Comment.create({
        comment: req.body.comment,
        post: req.params.id,
        image: result.secure_url,
        cloudinaryId: result.public_id,

      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  },
};