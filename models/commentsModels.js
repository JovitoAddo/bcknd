const mongoose = require("mongoose");

// buat schema data model
const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: "anonymous"
  },
  comments: {
    type: String,
    require: true,
    default: "No Comment."
  },
},{timestamps:true});

const Comments = mongoose.model("comments", commentsSchema);
module.exports = Comments;
