const express = require("express");

const router = express.Router();

//controllers
const teacherController = require("../controllers/teacher");

router.post("/add", teacherController.postAddTeacher);
router.get("/:searchEmail", teacherController.getTeacher);
router.get("/", teacherController.getTeachers);

module.exports = router;
