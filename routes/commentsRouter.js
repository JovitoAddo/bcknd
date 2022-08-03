const express = require('express');
const comments = express.Router();

const {addComments,getAllComment,getCommentByID,editComment,deleteComment} = require('../controllers/commentsControllers');

comments.get("/", getAllComment);
comments.get("/:id", getCommentByID);
comments.post("/", addComments);
comments.put("/:id", editComment);
comments.delete("/:id", deleteComment);

module.exports = comments;