const express = require('express');
const router = express.Router()

const commentsRouter = require("./commentsRouter")


router.get("/", (req, res) => {
  res.json("Backend for personal web");
});

router.use("/comments", commentsRouter)


module.exports = router