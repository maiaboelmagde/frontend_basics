# MongoDB Lab1  
**Intake42**  

## Lab Content  
1. Install mongodb  
2. Add mongo DB folder to your system variables path  
   - Go to -> Edit System environment variables -> Environment variables ->  
     inside system variables choose path and add:  
     ```
     C:\Program Files\MongoDB\Server\4.0\bin
     ```
     Apply and exit.  

3. Open server (on windows shell using command “mongod”);  

4. Open another shell for client using command “mongo” or ROBO3T Tool  

5. Create database with name ITI → by typing  


6. Start create new collection named instructors following with inserts  
- a- Insert your own data  
- b- Insert instructor without firstName and LastName (mongo will raise an error or not ?)  
- c- Using array contained with lab folder instructors.txt file.  
- d- BONUS Include data contained in json file (instructors.json) in your lab folder using administration mongoimport command  
  - In Windows Shell  
  ```
  mongoimport --db ITI --collection instrcutors --file filename.json --jsonArray
  ```

7. Try the following queries: (all queries should be run using find or findOne)  
- a- Display all documents for instructors collection  
- b- Display all instructors with fields firstName, lastName and address  
- c- Display firstName and city(not full address) for instructors with age 21.  
- d- Display firstName and age for instructors live in Mansoura city.  

- e- Try to run these commands  
  1.  
  ```
  db.instructors.find({firstName:"mona"},{lastName:"ahmed"},{firstName: 1,lastName:1}) 
  ```
  Explain the output!!  

  2.  
  ```
  db.instructors.find({courses:"mvc"},{firstName:1,courses:1})
  ```
  Explain the output!  
