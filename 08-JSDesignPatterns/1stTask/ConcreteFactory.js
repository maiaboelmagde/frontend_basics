import { Factory } from "./Factory.js";

export class ConcreteFactory extends Factory{
    constructor(){
        super();
    }

    SetStudentAccordingDegree(deg){
        if(deg>=70){
            return this.setAStudent();
        }
        return this.setBStudent();
    }
}