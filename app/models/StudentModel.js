// const { default: mongoose } = require("mongoose");

const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
     fatherName: {
        type: String,
        required: true
    },
     email: {
        type: String,
    },
     phone: {
        type: String,
        required: true,
        unique: true
    },
     dob: {
        type: Date,
        required: true
    },
})

const StudentModel = model("Student", StudentSchema);

module.exports = StudentModel