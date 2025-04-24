const express = require('express');
const { register, login, getUserDetail } = require('../controller/user.controller');
const validateToken = require('../middleware/middleware');

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/getUserDetails/:id", validateToken,  getUserDetail);


module.exports = router;