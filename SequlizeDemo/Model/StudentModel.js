const { DataTypes } = require("sequelize");
const db = require("../config");

const Student = db.define("Student", {
  studentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.INTEGER,
  },
});

//To Create table
// (async ()=>{
//   await Student.sync({force: true});
//   // Table created
//   await Student.create({
//     studentName: 'John',
//     result: '85',
//   });
// })();
module.exports = Student;
