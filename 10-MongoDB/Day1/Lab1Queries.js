use ITI
db.createCollection("instructors")
db.instructors.insertMany([
  {
    "firstName": "Ahmed",
    "lastName": "Ali",
    "age": 35,
    "specialty": "Data Science",
    "city": "Cairo"
  },
  {
    "firstName": "Mohamed",
    "lastName": "Hassan",
    "age": 40,
    "specialty": "Networking",
    "city": "Alexandria"
  },
  {
    "firstName": "Amira",
    "lastName": "Salem",
    "age": 29,
    "specialty": "Cyber Security",
    "city": "Giza"
  },
  {
    "firstName": "Youssef",
    "lastName": "Khaled",
    "age": 33,
    "specialty": "Machine Learning",
    "city": "Cairo"
  },
  {
    "firstName": "Fatma",
    "lastName": "Nour",
    "age": 28,
    "specialty": "Software Engineering",
    "city": "Mansoura"
  },
  {
    "firstName": "Kareem",
    "lastName": "Mahmoud",
    "age": 37,
    "specialty": "Cloud Computing",
    "city": "Alexandria"
  }
]);



db.instructors.insertOne({
  "age": 30,
  "specialty": "AI",
  "city": "Alexandria"
});


db.instructors.find();

db.instructors.find({},{firstName:1,lastName:1, address:1 ,_id:0});

db.instructors.find({ age: 21 },{ firstName: 1, "address.city": 1, _id: 0 });

db.instructors.find({"address.city":"mansoura"},{firstName:1, age:1, _id:0});

db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName:
 1,lastName:1});
 
  db.instructors.find({courses:"mvc"},{firstName:1,courses:1})
