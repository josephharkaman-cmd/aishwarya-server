const express = require("express");
const StudentController = require("./app/controllers/StudentController");
const TeacherController = require("./app/controllers/TeacherController");

const PORT = 5789

const app = express()
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome To the Coding World!");
})

app.get("/about", (req, res) => {
    res.send("Something about me");
});

app.post("/student", StudentController.create);
app.get("/student", StudentController.readAll);
app.get("/student/:id", StudentController.readOne);
app.put("/student/:id", StudentController.update);
app.delete("/student/:id", StudentController.destroy);

app.post("/teacher", TeacherController.create);
app.get("/teacher", TeacherController.readAll);
app.get("/teacher/:id", TeacherController.readOne);
app.put("/teacher/:id", TeacherController.update);
app.delete("/teacher/:id", TeacherController.destroy);

app.listen(PORT, function() {
    let name = "Sudarshan"
    console.log('Hello & Welcome To College, ' + name);
    console.log("Hello & Welcome To College, " + name);
    console.log(`Server started at http://localhost:${PORT}`);
    
});