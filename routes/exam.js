const express = require("express");

const router = express.Router();

//controllers
const examController = require("../controllers/exam");

router.post("/add", examController.postAddExam);
router.get("/", examController.getExams);

module.exports = router;
