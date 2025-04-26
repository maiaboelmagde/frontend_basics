const mongoose = require('mongoose');

const Coursechema = new mongoose.Schema({
  "_id": String,
  "CourseName": String,
  "FinalMark": Number
},{versionKey: false});

module.exports = mongoose.model('Course', Coursechema, 'Course');
