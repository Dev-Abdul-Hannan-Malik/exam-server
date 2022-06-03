const Exam = require("../models/exam");

exports.postAddExam = async (req, res, next) => {
  try {
    const { exam_id, examName, timeMin, starttime, endtime, questionsList } =
      req.body;
    const exam = new Exam({
      exam_id,
      examName,
      timeMin,
      starttime,
      endtime,
      questionsList,
    });
    const result = await exam.save();
    console.log("Exam Created!");
    res.json({
      message: "Exam Created Successfully!",
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.getExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.json({
      exams,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
