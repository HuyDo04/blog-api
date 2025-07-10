const express = require("express");

const postController = require("@/controller/post.controller");
const handlePagination = require("@/middleware/handlePagination");

const router = express.Router();

router.get("/" , postController.index);

router.get("/id/:id", postController.getById);

router.get("/:slug", postController.show);

router.post ("/", postController.store)

router.put("/id/:id", postController.update);

router.delete("/:id", postController.destroy);

module.exports = router