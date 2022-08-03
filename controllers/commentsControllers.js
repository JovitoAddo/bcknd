const Comments = require("../models/commentsModels")

module.exports = {
  addComments: async (req, res) => {
    const data = req.body;
  
    try {
      await Comments.create(data);
      res.json({
        message: "Comment Added",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getAllComment: async (req, res) => {
    const comments = await Comments.find({}, "-__v")
    
    try {
      res.json({
        message: "Show All Comments",
        data: comments,
      });
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },
  getCommentByID: async (req, res) => {
    const comments = await Comments.findById(req.params.id, "-__v")
    
    try {
      res.json({
        message: "Data by ID",
        data: comments,
      });
    } catch (err) {
      console.log(err), res.status(500).send(err);
    }
  },

  editComment: async (req, res) => {
    const data = req.body;
    const comment = await Comments.findById(req.params.id, "-__v")

    try {
      await Comments.updateOne({ _id: req.params.id }, data),
        res.json({
          message: "Project has been updated",
        });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  deleteComment: async (req,res) => {
    try {
      const comment = await Comments.findById(req.params.id, "-__v")
      comment.deleteOne();
      res.json({
        message: "Comment has been deleted"
      })
    } catch (error) {
      console.log(error);
      res.status(400).send(error)
    }
  }

}