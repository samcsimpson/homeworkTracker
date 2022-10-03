const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const CommentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.post("/createComment/:id", upload.single("file"), CommentsController.createComment);

router.delete("/deleteComment/:id", CommentsController.deleteComment);

module.exports = router;