const studentModel = require("../Model/studentModel");

const PostItem = async (req, res) => {
  const student = new studentModel({
    id: req.body.id,
    name: req.body.name,
    standard: req.body.standard,
  });
  try {
    const StudentData = await student.save();
    res.send(StudentData);
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports=PostItem;
