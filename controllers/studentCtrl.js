const studentModel= require('../models/student')

module.exports = {
    createStudent: (req,res)=>{
       if(!req.body){
            return res.status(400).json({"message":"Student detail cannot be empty"})
       } else {
            const studentDetail = new studentModel({
                name: req.body.name,
                email: req.body.email,
                contactNo: req.body.contactNo,
                address: req.body.address,
                course: req.body.course,
                courseDuration: req.body.courseDuration
            });
            studentDetail.save().then(data=>{
                res.status(200).send(data)
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Something went wrong while storing the student detail"
                })
            })
       }
    },
    findAllStudents: (req,res)=>{
        studentModel.find().then(student=>{
            res.status(200).send(student).catch(err=>{
                res.status(500).send({
                    message: err.message || "Something went wrong while retiving detail"
                })
            })
        })
    },
    findOneStudents: (req,res)=>{
        studentModel.findById(req.params.studentID).then(student=>{
            if(!student){
                return res.status(404).send({
                    message: "Student not found with id" + req.params.studentID
                })
            } else {
                res.status(200).send(student)
            }
        }).catch(err=>{
            if(err.kind === 'ObjectId'){
                return res.status(404).send({
                    message : "Something wrong retrieving student with id " + req.params.studentId
                })
            } else {
                return res.status(500).send({
                    message : "Something wrong retrieving student with id " + req.params.studentId
                })
            }    
        })
    },
    deleteStudentDetail: (req,res)=>{
        studentModel.findByIdAndRemove(req.params.studentID)
            .then(student => {
                if(!student){
                    return res.status(404).send({
                        message : "Student not found with id" + req.params.studentID
                    })
                } else {
                    res.status(200).send(student)
                }
            }).catch(err => {
                if(err.kind === 'ObjectId'){
                    return res.status(404).send({
                        message : "Something wrong retrieving student with id " + req.params.studentId
                    })
                } else {
                    return res.status(500).send({
                        message : "Something wrong retrieving student with id " + req.params.studentId
                    })
                }   
            })    
    },
    updateStudentDetail: (req,res)=>{
        if(!req.body){
            return res.status(400).send({
                message : "Student details cannot be left empty"
            })
        } else {
            studentModel.findByIdAndUpdate(req.params.studentID, {
                name: req.body.name,
                email: req.body.email,
                contactNo: req.body.contactNo,
                address: req.body.address,
                course: req.body.course,
                courseDuration: req.body.courseDuration
            }).then(student => {
                if(!student){
                    return res.status(404).send({
                        message : "Student not found with id" + req.params.studentID
                    })
                } else {
                    res.status(200).send(student)
                }
            }).catch(err => {
                if(err.kind === 'ObjectId'){
                    return res.status(404).send({
                        message : "Something wrong retrieving student with id " + req.params.studentId
                    })
                } else {
                    return res.status(500).send({
                        message : "Something wrong retrieving student with id " + req.params.studentId
                    })
                }   
            })
        }
    }
}
