const Teacher = require("../models/teacher");

exports.postAddTeacher = async (req, res, next) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    const teacher = new Teacher({ name, email, password });
    const result = await teacher.save();
    console.log("Teacher Created!");
    res.json({
      message: "Teacher Created Successfully!",
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.getTeachers = async (req, res, next) => {
  try {
    const teachers = await Teacher.find();

    res.json({
      teachers,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.getTeacher = async (req, res, next) => {
  try {
    const { searchEmail } = req.params;
    const teacher = await Teacher.findOne({ email: searchEmail });

    res.json({
      teacher,
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
