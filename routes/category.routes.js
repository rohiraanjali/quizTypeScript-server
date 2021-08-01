const express = require("express");
const router = express.Router();
const {getQuestions} = require("../controllers/Category.controller")

router.route("/questions").get(getQuestions)

module.exports = router;