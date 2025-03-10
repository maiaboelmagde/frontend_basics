export class Document{
    constructor(header , footer , pages, text ){
        this.Header = header;
        this.Footer = footer;
        this.Pages = pages;
        this.Text = text;
    }

    toString(){
        return `Header : ${this.Header}\nFooter : ${this.Footer}\nPages : ${this.Pages}\nText : ${this.Text}`;
    }
}
