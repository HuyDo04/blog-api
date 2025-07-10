const express = require("express");

const commentController = require("@/controller/comment.controller")

const router = express.Router();

router.get("/", commentController.index);

router.get("/:id", commentController.show);

router.post ("/:id", commentController.store)

router.put("/:id", commentController.update);

router.delete("/:id", commentController.destroy);

module.exports = router