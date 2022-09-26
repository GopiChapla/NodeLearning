const studentModel = require("../Model/studentModel");

const GetItem = async (req, res) => {
  try {
    const StudentData = await studentModel.findById(req.params.id);
    res.json(StudentData);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = GetItem;
