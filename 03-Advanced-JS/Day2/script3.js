var boxObj = function (height = 10, width = 10, length = 10, material){
    if (isNaN(height) || isNaN(width) || isNaN(length) || height <= 0 || width <= 0 || length <= 0) {
        throw new Error("Invalid dimensions. Height, width, and length must be positive numbers.");
    }
    this.height = height;
    this.width = width;
    this.length = length;
    this.material = material;
    this.content = [];
    this.deleteBook = function(name){
        let flag = false;
        for (let i in this.content){
            if(this.content[i].title == name){
                if(this.content[i].numofCopies > 1){
                    this.content[i].numofCopies -= 1;
                }else{ //there's on copy of this book--> delete the book.
                    this.content.splice(i,1);
                }
                flag = true
            }
        }
        if(!flag){
            throw new Error("can't find this book to delete")
        }
    }

    this.addBook = function(book){
        if (!book || typeof book.title !== 'string' || isNaN(book.numofCopies) || book.numofCopies <= 0) {
            throw new Error("Invalid book object.");
        }
        found = false;
        for (let index = 0; index < this.content.length; index++) {
            if(this.content[index].title == book.title){// this book exist already....
                this.content[index].numofCopies += book.numofCopies;//add the copies.
                found = true;
            }
        }
        if(!found)
            this.content.push(book);
    }

    this.getNumOfBooks = function(){
        let numb = 0;
        for(let i in this.content){
            numb += this.content[i].numofCopies;
        }
        return numb;
    }
}


var bookObj = function(title, numofChapters, author, numofPages, publisher, numofCopies){
    this.title = title;
    this.numofChapters = numofChapters;
    this.author = author;
    this.numofPages = numofPages;
    this.publisher = publisher;
    this.numofCopies = numofCopies;

    bookObj.counter += 1;
}

bookObj.counter = 0;
var theBox = new boxObj();

var book1 = new bookObj('title1',2,'auth1',200,'pub1',2);
theBox.addBook(book1);
console.log('num of book instances = ' + bookObj.counter);
console.log('num of book inside the box = ' +theBox.getNumOfBooks());
console.log("-----------------------------------");
var book2 = new bookObj('title2',5,'auth1',300,'pub2',1);
var book3 = new bookObj('title3',6,'auth1',600,'pub3',6);
theBox.addBook(book2);
console.log('num of book instances = ' + bookObj.counter);
console.log('num of book inside the box = ' +theBox.getNumOfBooks());
console.log("------------------------------------");
var book4 = new bookObj('title4',2,'auth1',700,'pub4',3);
var book5 = new bookObj('title5',7,'auth1',300,'pub5',1);
theBox.addBook(book4);
console.log('num of book instances = ' + bookObj.counter);
console.log('num of book inside the box = ' +theBox.getNumOfBooks() );
console.log("------------------------------------");

theBox.deleteBook('title1'); //delete copy of first book
console.log('num of book inside the box = ' +theBox.getNumOfBooks() );
console.log(theBox.content);

theBox.deleteBook('title2'); //delete copy of 2nd book (it has one copy)
console.log('num of book inside the box = ' +theBox.getNumOfBooks() );
console.log(theBox.content);




