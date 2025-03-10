import { Document } from "./Document.js";
import { DocumentPrototype } from "./DocumentPrototype.js";

var FirstDoc = new Document("header1" , "footer1" , "5 Pages", "Text ............................................................");

console.log(`FirstDoc is represented as following : \n${FirstDoc.toString()}`);


var docProto = new DocumentPrototype(FirstDoc);

var SecondDoc = docProto.clone();
console.log(`SecondDoc(cloned from FirstDoc using DocumentPrototype class) is represented as following :\n${SecondDoc.toString()}`);
