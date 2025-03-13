import { Teacher } from "./Teacher.js";
import { TeacherDecorator } from "./TeacherDecorator.js";

const t = new Teacher(1, "Mai", 22);

const tD = new TeacherDecorator(t, 20000, "Egy", "streeeeeeet");

console.log(tD.display());