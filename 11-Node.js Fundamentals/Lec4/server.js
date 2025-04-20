const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 7000;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/FacultySystemV2");

const Course = require('./models/Course');
const Students = require('./models/Student');
const Faculties = require('./models/Faculty');

const DBListener = mongoose.connection;
DBListener.on('error', (err) => { console.log("Error while connecting", err) });

DBListener.once('open', () => {
  console.log("Connected Successfully");

  app.set("view engine", "ejs");

  app.get("/Students", async (req, res) => {
    try {
      const allStudents = await Students.find().populate("FacultyID").populate("Courses.CourseID");
      res.render('Student.ejs', { allStudents });
    } catch (error) {
      res.status(500).send('Error getting Students');
    }
  });

  app.get("Courses/add", (req, res) => {
    res.render('addNewCourse.ejs');
  });

  app.post("Courses/add", async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.redirect("/Courses");
  });

  app.get("/Courses", async (req, res) => {
    try {
      const allCourses = await Course.find();
      res.render('Course.ejs', { allCourses });
    } catch (error) {
      res.status(500).send('Error getting Courses');
    }
  });

  app.get("/Courses/add", (req, res) => {
    res.render('addNewCourse.ejs');
  });

  app.post("/Courses/add", async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.redirect("/Courses");
  });

  app.get("/Faculties",async(req,res)=>{
    try{
      const allFaculties = await Faculties.find();
      res.render("Faculty.ejs",{allFaculties});
    }catch(error){
      res.status(500).send("Error while getting Faculties...");
    }
  });
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
