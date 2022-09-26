const studentModel = require("../Model/studentModel");

const GetItems = async (req, res) => {
  try {
    const StudentData = await studentModel.find();
    res.json(StudentData);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = GetItems;
