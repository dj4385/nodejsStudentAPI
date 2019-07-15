const studentModel= require('../models/student')

module.exports = {
    createStudent: (req,res)=>{
       if(!req.body.content){
            return res.status(400).json({"message":"Student detail cannot be empty"})
       } else {
            const studentDetail = new studentModel({
                name: req.body.name,
                email: req.body.name,
                contactNo: req.body.name,
                address: req.body.name,
                course: req.body.name,
                courseDuration: req.body.courseDuration
            });
            studentDetail.save().then(data=>{
                res.send(data)
            }).catch(err=>{
                res.status(500).send({
                    message: err.message || "Something went wrong while storing the student detail"
                })
            })
       }
    },
    findAllStudents: (req,res)=>{},
    findOneStudents: (req,res)=>{},
    deleteStudentDetail: (req,res)=>{},
    updateStudentDetail: (req,res)=>{}
}
