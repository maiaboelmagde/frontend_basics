import { Document } from "./Document.js";
export class DocumentPrototype{
    constructor(doc){
        this.doc = doc;
    }

    clone(){
        var newDoc = new Document(this.doc.Header, this.doc.Footer, this.doc.Pages, this.doc.Text);
        return newDoc;
    }
}
