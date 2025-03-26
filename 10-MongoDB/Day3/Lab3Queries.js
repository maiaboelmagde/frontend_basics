
use FacultySystemV2

db.createCollection("student",{
    validator: {
        $jsonSchema : {
            bsonType : "object",
            properties : {
                FirstName : {
                    bsonType : "string",
                    description : "Must be string"
                },
                lastName : {
                    bsonType : "string",
                    description : "Must be string"
                },
                IsFired : {bsonType : "bool"},
                FacultyID : {bsonType : "string"},
                Courses : {
                    bsonType : "array",
                    items : {
                        bsonType : "object",
                        properties : {
                            CourseID :  {bsonType : "string"}
                        }
                    }
                },
                grade : {bsonType : "double"}
            }
        }
    }
});



db.createCollection("Faculty", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["FacultyName", "Address"],
            properties: {
                FacultyName: {
                    bsonType: "string",
                    description: "Must be a string and is required"
                },
                Address: {
                    bsonType: "object",
                    required: ["Street", "City"],
                    properties: {
                        Street: {
                            bsonType: "string",
                            description: "Must be a string and is required"
                        },
                        City: {
                            bsonType: "string",
                            description: "Must be a string and is required"
                        },
                        ZipCode: {
                            bsonType: "string",
                            description: "Must be a string"
                        }
                    }
                }
            }
        }
    }
});



db.createCollection("Course", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["CourseName", "FinalMark"],
            properties: {
                CourseName: {
                    bsonType: "string",
                },
                FinalMark: {
                    bsonType: "int",
                    minimum: 0,
                }
            }
        }
    }
});

//////////////////////////////////////////////////////////////////////////

db.student.insertMany([
    {
        FirstName: "Ahmed",
        lastName: "Ali",
        IsFired: false,
        FacultyID: "1",
        Courses: [
            { CourseID: "1" },
            { CourseID: "2" }
        ],
        grade: 85.5
    },
    {
        FirstName: "Fatma",
        lastName: "Nour",
        IsFired: false,
        FacultyID: "2",
        Courses: [
            { CourseID: "3" },
            { CourseID: "4" }
        ],
        grade: 90.0
    },
    {
        FirstName: "Youssef",
        lastName: "Khaled",
        IsFired: true,
        FacultyID: "1",
        Courses: [
            { CourseID: "2" },
            { CourseID: "3" }
        ],
        grade: 75.0
    }
]);

db.Faculty.remove({})
db.Faculty.find({})

db.Faculty.insertMany([
    {
        _id:"1",
        FacultyName: "Computer Science",
        Address: {
            Street: "10th Street",
            City: "Cairo",
            ZipCode: "12345"
        }
    },
    {
        _id:"2",
        FacultyName: "Engineering",
        Address: {
            Street: "5th Avenue",
            City: "Alexandria",
            ZipCode: "67890"
        }
    },
    {
        _id: "3",
        FacultyName: "Medicine",
        Address: {
            Street: "Medical Road",
            City: "Giza",
            ZipCode: "11223"
        }
    }
]);

db.Course.remove({});
db.Course.find({});


db.Course.insertMany([
    {
        _id : "1",
        CourseName: "Data Structures",
        FinalMark: 100
    },
    {
        _id: "2",
        CourseName: "Algorithms",
        FinalMark: 100
    },
    {
        _id:"3",
        CourseName: "Database Systems",
        FinalMark: 90
    },
    {
        _id:"4",
        CourseName: "Operating Systems",
        FinalMark: 95
    }
]);

db.student.find({})
/////////////////////////////////////// 2:

db.student.aggregate([{$project : {"FullName" : {$concat :["$FirstName"," ","$lastName"]}, AverageGrade: "$grade"}}]);
////////////////////////////////////////3:
db.Course.aggregate([
  {
    $group: {
      _id: null,
      TotalFinalMark: { $sum: "$FinalMark" }
    }
  }
]);

/////////////////////////////////////4:
//Note: 4 & 5 are already done in initialization, so to show it we can:
//Select a specific student by name and display their courses:

db.student.aggregate([
  {
    $match: { FirstName: "Ahmed" }
  },
  {
    $lookup: {
      from: "Course",
      localField: "Courses.CourseID",
      foreignField: "_id",
      as: "EnrolledCourses"
    }
  },
  {
    $project: {
      _id: 0,
      FullName: { $concat: ["$FirstName", " ", "$lastName"] },
      EnrolledCourses: 1
    }
  }
]);

//Select a specific student by name and display their faculty:
db.student.aggregate([
  {
    $match: { FirstName: "Ahmed" }
  },
  {
    $lookup: {
      from: "Faculty",
      localField: "FacultyID",
      foreignField: "_id",
      as: "FacultyInfo"
    }
  },
  {
    $project: {
      _id: 0,
      FullName: { $concat: ["$FirstName", " ", "$lastName"] },
      FacultyInfo: 1
    }
  }
]);

