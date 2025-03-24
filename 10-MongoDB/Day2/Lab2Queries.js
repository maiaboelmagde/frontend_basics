//a
db.instructors.find({});
//b
db.instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1, _id: 0 });

//c
db.instructors.find({ age: { $lte: 25 } });
//d
db.instructors.find({ $and: [{ "address.city": "mansoura" }, { "address.street": { $in: [10, 14] } }] } , {firstName : 1, address : 1, salary : 1, _id : 0});
//e
db.instructors.find({courses : {$all : ["js", "jquery"]}})
//f
db.instructors.find({courses : {$exists : true}}).forEach(e=>{
    print(e.firstName + "  " + e.courses?.length);
});
//g
db.instructors.find({firstName : {$exists : true}, lastName : {$exists : true}}).sort({firstName : 1, lastName : -1}).forEach(doc=>{
   print("FullName : "+ doc.firstName + " " + doc.lastName + " , Age: "+doc.age);
});

//BONUS
db.instructorsData.insertMany(
db.instructors.find({firstName : {$exists : true}, lastName : {$exists : true}} , {FullName : {$concat : ["$firstName"," ","$lastName"]} , age : 1, _id : 0}).sort({firstName : 1, lastName : -1}).toArray()
);
db.instructorsData.find({})

//h //ensure!!!
db.instructors.find({$or : [{firstName : "mohammed"}, {lastName : "mohammed"}]} )

//i
db.instructors.deleteOne({fitstName : "ebtesam" , courses: {$size : 5}})

db.instructors.find({fitstName : "ebtesam" , courses: {$size : 5}})

//j
db.instructors.updateMany({}, {$set : {active : true} })

//k
db.instructors.updateMany({firstName : "mazen" , lastName : "mohammed" , courses : "EF"}, {$set : {"courses.$" : "jquery"}} , {upsert : true});

//l
db.instructors.updateMany({firstName : "noha" , lastName : "hesham"}, {$push : {"courses" : "jquery"}} );
//option2
db.instructors.updateMany({firstName : "noha" , lastName : "hesham"}, {$addToSet : {"courses" : "jquery"}} );

db.instructors.find()

//M
db.instructors.updateMany({firstName : "ahmed" , lastName : "mohammed"}, {$unset : {"courses" : ""}} );

//n
db.instructors.updateMany({courses : {$size : 3 }}, {$inc : { salary : -500}} );

//o
db.instructors.updateMany({}, {$rename : {"address" : "FullAdress"}});

db.instructors.find()

//p
db.instructors.updateMany({firstName : "noha" , lastName : "hesham"}, {$set : {"FullAddress.street":20}} );
