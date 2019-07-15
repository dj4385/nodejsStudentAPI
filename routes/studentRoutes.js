module.exports = app => {
    const studentCtrll = require('../controllers/studentCtrl')

    app.post('/student', studentCtrll.createStudent);
    app.get('/studentDetails', studentCtrll.findAllStudents);
    app.get('/studentDetail/:studentID', studentCtrll.findOneStudents)
    app.put('/updateStudentDetail/:studentID', studentCtrll.updateStudentDetail)
    app.delete('/deleteStudent/:studentID', studentCtrll.deleteStudentDetail)
}