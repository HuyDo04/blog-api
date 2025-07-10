const express = require("express");
const postRouter = require("./post.route");
const commentRouter = require("./comment.route");
const authRouter = require("./auth.route");
const topicRouter = require("./topic.route");
const handlePagination = require("@/middleware/handlePagination");
const topicController = require("@/controller/topic.controller")
const router = express.Router();

router.get("/", topicController.getAllTopicPost)

router.use("/auth", authRouter);

router.use(`/posts`, postRouter);

router.use("/comments", commentRouter);

router.use("/topics", topicRouter);

module.exports = router