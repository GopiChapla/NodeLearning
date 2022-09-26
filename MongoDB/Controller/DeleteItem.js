const studentModel = require("../Model/studentModel");

const DeleteItem = async (req, res) => {
  try {
    const StudentData = await studentModel.findByIdAndDelete(req.params.id);
    res.json(StudentData);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = DeleteItem;
