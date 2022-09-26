const studentModel = require("../Model/studentModel");

const PutItem = async (req, res) => {
  const student = {
    id: req.body.id,
    name: req.body.name,
    standard: req.body.standard,
  };
  try {
    const StudentData = await studentModel.findByIdAndUpdate(
      { _id: req.params.id },
      student
    );
    res.send(StudentData);
  } catch (error) {
    res.send({ message: error });
  }
};

module.exports = PutItem;
