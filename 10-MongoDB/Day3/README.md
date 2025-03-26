# Lab3 Tasks (MongoDB) :

## 1. Create new database named: **FacultySystemV2**  
- Create `student` collection that has:  
    - `FirstName`, `lastName`, `IsFired`, `FacultyID`  
    - Array of objects, each object has:  
        - `CourseID`, `grade`  

- Create `Faculty` collection that has:  
    - `FacultyName`, `Address`  
        - `Street`, `City`, `ZipCode`  

- Create `Course` collection that has:  
    - `CourseName`, `FinalMark`  

- Insert some data in previous collections.  

---

## 2. Display each student Full Name along with his average grade in all courses using `$concat`.  

---

## 3. Using aggregation, display the sum of final marks for all courses in the `Course` collection.  

---

## 4. Implement a **one-to-many** relation between `Student` and `Course` by adding an array of Course IDs in the student object.  
- Select a specific student by name and display their courses.  

---

## 5. Implement a relation between `Student` and `Faculty` by adding the faculty object in the student using `_id` relation with `$lookup`.  
- Select a specific student by name and display their faculty.  
