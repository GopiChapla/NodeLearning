const express = require("express");
const router = express.Router();
const StudentController=require("../Controller/StudentController");


router.get('/',StudentController.getAllStudent);
router.get('/:id',StudentController.getStudent);
router.post('/',StudentController.addStudent);
router.put('/:id',StudentController.updateStudent);
router.delete('/:id',StudentController.deleteStudent);


module.exports=router;