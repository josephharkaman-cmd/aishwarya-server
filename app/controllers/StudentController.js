const StudentController = {
  create(req, res) {
    const body = req.body
    res.send({
      message: "Success! New record created.",
      reqBody: body
    });
  },
  readAll(req, res) {
    res.send({
      message: "Success! 46 records found.",
    });
  },
  readOne(req, res) {
    const params = req.params;

    res.send({
      message: "Success! Student details found.",
      q: params
    });
  },
  update(req, res) {
    res.send({
      message: "Success! record has been updated.",
    });
  },
  destroy(req, res) {
    res.send({
      message: "Success! record has been deleted.",
    });
  },
};

module.exports = StudentController;