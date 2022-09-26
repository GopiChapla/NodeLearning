const Student = require("../Model/StudentModel");
const db = require("../config");

const getAllStudent = (req, res) => {
  Student.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => res.json(err));
};

const getStudent = (req, res) => {
  const id = req.params.id;

  //Getting by Primary Key
  // Student.findByPk(id).then((data)=>{
  //    if (data) {
  //     res.send(data);
  //   } else {
  //     res.send("Not Found!");
  //   }
  // }).catch((err) =>{
  //     res.send(err);
  //   }
  // )

  //Getting by other fields
  Student.findOne({ where: { id: id } })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("Not Found!");
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const addStudent = (req, res) => {
  const item = {
    studentName: req.body.studentName,
    result: req.body.result,
  };

  Student.create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateStudent = (req, res) => {
  const id = req.params.id;

  const item = {
    studentName: req.body.studentName,
    result: req.body.result,
  };

  Student.update(item, {
    where: { id: id },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteStudent = (req, res) => {
  const id = req.params.id;

  Student.destroy({
    where: { id: id },
  })
    .then((data) => {
      if (num == 1) {
        res.send(data);
      } else {
        res.send(
          `Cannot delete Student with id=${id}. Maybe Tutorial was not found!`
        );
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  getAllStudent,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
};
