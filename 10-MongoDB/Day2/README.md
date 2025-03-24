# MongoDB Lab 2

## Overview
This lab contains a set of MongoDB queries to practice working with the `instructors` collection.


## Lab Content :

### 1. Run the following queries on `instructors` collection:

#### a. Display all documents in `instructors` collection  
#### b. Display all instructors with salaries greater than 4000 (only show `firstName` and `salary`)  
#### c. Display all instructors with ages less than or equal to 25  
#### d. Display all instructors with city `mansoura` and street number `10` or `14` (only display `firstname`, `address`, `salary`)  
#### e. Display all instructors who have `js` and `jquery` in their courses (both of them not one of them)  
#### f. Display number of courses for each instructor and display `firstName` with number of courses  

---

#### g. Write MongoDB query to get all instructors that have `firstName` and `lastName` properties, sort them by `firstName` ascending then by `lastName` descending, and finally display their data (`FullName` and `age`)  

> **Note:** Use MongoDB `sort` method, not JavaScript array method  

**Bonus:** Create a new collection with step `g` values data and name it `instructorsData`  

---

#### h. Find all instructors that have `fullName` that contains `“mohammed”`  
#### i. Delete instructor with `firstName` “ebtesam” and has only `5` courses in `courses` array  
#### j. Add `active` property to all instructors and set its value to `true`  

---

#### k. Change `“EF”` course to `“jquery”` for `“mazen mohammed”` instructor (without knowing `EF` Index)  
#### l. Add `jquery` course for `“noha hesham”`  
#### m. Remove `courses` property for `“ahmed mohammed”`  
#### n. Decrease salary by `500` for all instructors that have only `3` courses in their list (`$inc`)  
#### o. Rename `address` field for all instructors to `fullAddress`  
#### p. Change street number for `noha hesham` to `20`  

---

**ITI** labs
