const express = require("express");

const authController = require("@/controller/auth.controller");
const checkAuth = require("@/middleware/checkAuth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.refreshToken);

router.get("/me", checkAuth, authController.me);


module.exports = router