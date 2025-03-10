import { AStudents } from "./AStudents.js";
import { BStudents } from "./BStudents.js";

export class Factory {
    constructor(){
        console.log("Factory Class");
    }

    setAStudent(){
        return new AStudents();
    }

    setBStudent(){
        return new BStudents();
    }

}
