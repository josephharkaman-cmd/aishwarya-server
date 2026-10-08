const StudentModel = require("../models/StudentModel");

const StudentController = {
 async create(req, res) {
    const body = req.body

    await StudentModel.create(body)

    res.send({
      message: "Success! New record created.",
      reqBody: body
    });
  },
  async readAll(req, res) {
    const students = await StudentModel.find()
    res.send({
      message: "Success! 46 records found.",
      data: students
    });
  },
  async readOne(req, res) {
    const params = req.params;

    const studentDetails = await StudentModel.findById(params.id)

    res.send({
      message: "Success! Student details found.",
      data: studentDetails
    });
  },
  async update(req, res) {
    const params = req.params
    const body = req.body 

    await StudentModel.findByIdAndUpdate(params.id, body)

    res.send({
      message: "Success! record has been updated.",
    });
  },
  async destroy(req, res) {
    const params = req.params

    await StudentModel.findByIdAndDelete(params.id)

    res.send({
      message: "Success! record has been deleted.",
    });
  },
};

module.exports = StudentController;