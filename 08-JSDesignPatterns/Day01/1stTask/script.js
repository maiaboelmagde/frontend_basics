import { ConcreteFactory } from "./ConcreteFactory.js";

const factory = new ConcreteFactory();
var Student1 = factory.SetStudentAccordingDegree(80);

var Student2 = factory.SetStudentAccordingDegree(50);


