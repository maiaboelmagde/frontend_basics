import { Teacher } from "./Teacher.js";

export class TeacherDecorator{
    constructor(teacher, salary ,Nationality , street ){
        this.id = teacher.id;
        this.name = teacher.name;
        this.age = teacher.age;

        this.salary = salary;
        this.Nationality = Nationality;
        this.street = street;

        this.display = function(){
            return `TeacherDecorator with following properties values : ${this.id} , ${this.name} , ${this.age}, ${this.salary}, ${this.Nationality}, ${this.street}`;
        }
    }
}