const express = require('express')
const route = express.Router();
const studentCtrll = require('../controllers/studentCtrl')

route.post('/student', studentCtrll.createStudent);
route.get('/studentDetails', studentCtrll.findAllStudents);
route.get('/studentDetail/:studentID', studentCtrll.findOneStudents)
route.put('/updateStudentDetail/:studentID', studentCtrll.updateStudentDetail)
route.delete('/deleteStudent/:studentID', studentCtrll.deleteStudentDetail)

module.exports = route