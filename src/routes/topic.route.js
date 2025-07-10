const express = require("express");

const topicController = require("@/controller/topic.controller")

const router = express.Router();

router.get("/", topicController.index);

// get posts thuộc topic
router.get("/:slug",topicController.getBySlug)

router.get("/:id", topicController.show);

router.post ("/:id", topicController.store)

router.put("/:id", topicController.update);

router.delete("/:id", topicController.destroy);

module.exports = router