import { SingletonClass } from "./Singleton.js";

var FirstObject = new SingletonClass();
console.log(`The Counter of objects after FirstObject = ${FirstObject.Counter}`);

var SecondObject = new SingletonClass();
console.log(`The Counter of objects after SecondObject = ${SecondObject.Counter}`);

console.log(`IS FirstObject === SecondObject ?! --${FirstObject === SecondObject}`);

