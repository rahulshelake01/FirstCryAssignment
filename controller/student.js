const db = require("../db")
const Students = db.Student

const addStudent = async (req, resp) => {
    
    let Student = new Students(req.body)
    Student.save(function(err, data) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({student:data, message:"Student added successfully."})
        }
    })
}

const getStudent = async (req, resp) => {
    let response = {student: await Students.findById(req.params.id).populate("address")}
    resp.status(200).json(response)
}

const getStudents = async (req, resp) => {
    let response = {student: await Students.find({}).populate("address")}
    resp.status(200).json(response)
}

const updateStudent = async (req, resp) => {
    Students.findByIdAndUpdate(req.params.id, req.body, function(err) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message: "Student updated successfully."})
        }
    })
}

const deleteStudent = async (req, resp) => {
    Students.findByIdAndDelete(req.params.id, function(err) {
        if (err) {
            resp.status(400).json({error:"Bad request"})
        }
        else{
            resp.status(200).json({message: "Student deleted successfully."})
        }
    })
}

module.exports = {
    addStudent,
    getStudent,
    getStudents,
    updateStudent,
    deleteStudent
}