const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 7000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/FacultySystemV2");

const Coursechema = new mongoose.Schema({
  "_id": String,
  "CourseName": String,
  "FinalMark": Number
});

const Course = mongoose.model('Course', Coursechema, 'Course');

const DBListener = mongoose.connection;
DBListener.on('error', (err) => { console.log("Error while connecting", err) });

DBListener.once('open', () => {
  console.log("Connected Successfully");

  app.set("view engine", "ejs");

  app.get("/", async (req, res) => {
    const allCourses = await Course.find();
    res.render('Course.ejs', { allCourses });
  });

  app.get("/add", (req, res) => {
    res.render('addNewCourse.ejs');
  });

  app.post("/add", async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
