var boxObj = function (height = 10, width = 10, length = 10, material) {
    if (isNaN(height) || isNaN(width) || isNaN(length) || height <= 0 || width <= 0 || length <= 0) {
        throw new Error("Invalid dimensions. Height, width, and length must be positive numbers.");
    }

    let content = [];

    Object.defineProperties(this, {
        'height': {
            value: height,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'width': {
            value: width,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'length': {
            value: length,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'material': {
            value: material,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'content': {
            get: function () {
                return content;
            },
            enumerable: false,
            configurable: false,
        }
    });

    Object.defineProperties(this, {
        'addBook': {
            value: function (book) {
                if (!book || typeof book.title !== 'string' || isNaN(book.numofCopies) || book.numofCopies <= 0) {
                    throw new Error("Invalid book object.");
                }
                var found = false;
                for (var i = 0; i < content.length; i++) {
                    if (content[i].title === book.title) {
                        content[i].numofCopies += book.numofCopies;
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    content.push(book);
                }
            },
            writable: false,
            enumerable: false,
            configurable: false,
        },
        'deleteBook': {
            value: function (name) {
                var flag = false;
                for (var i = 0; i < content.length; i++) {
                    if (content[i].title === name) {
                        if (content[i].numofCopies > 1) {
                            content[i].numofCopies -= 1;
                        } else {
                            content.splice(i, 1);
                        }
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    throw new Error("Can't find this book to delete");
                }
            },
            writable: false,
            enumerable: false,
            configurable: false,
        },
        'getNumOfBooks': {
            value: function () {
                var total = 0;
                for (var i = 0; i < content.length; i++) {
                    total += content[i].numofCopies;
                }
                return total;
            },
            writable: false,
            enumerable: false,
            configurable: false,
        },
        'toString': {
            value: function () {
                var sentence = 'This box instance`s dimensions are: (' + this.width + ', ' + this.height + ', ' + this.length + ') and books are stored in it as follows: ';
                for (var i = 0; i < content.length; i++) {
                    sentence += content[i].title + '(' + content[i].numofCopies + (content[i].numofCopies > 1 ? ' copies) ' : ' copy) ');
                }
                return sentence.trim();
            },
            writable: false,
            enumerable: false,
            configurable: false,
        },
        'valueOf': {
            value: function () {
                return content.length;
            },
            writable: false,
            enumerable: false,
            configurable: false,
        },
    });
};

var bookObj = function (title, numofChapters, author, numofPages, publisher, numofCopies) {
    if (!title || isNaN(numofChapters) || !author || isNaN(numofPages) || !publisher || isNaN(numofCopies) || numofCopies <= 0) {
        throw new Error("Invalid book parameters.");
    }

    Object.defineProperties(this, {
        'title': {
            value: title,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'numofChapters': {
            value: numofChapters,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'author': {
            value: author,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'numofPages': {
            value: numofPages,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'publisher': {
            value: publisher,
            writable: false,
            enumerable: true,
            configurable: false,
        },
        'numofCopies': {
            value: numofCopies,
            writable: true,
            enumerable: true,
            configurable: false,
        }
    });

    bookObj.counter++;
};

Object.defineProperty(bookObj, 'counter', {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: false,
});


var Box1 = new boxObj(30, 40, 30, 'wood');
var Box2 = new boxObj(20, 30, 10, 'paper');

var book1 = new bookObj('title1', 2, 'auth1', 200, 'pub1', 2);
Box1.addBook(book1);

var book2 = new bookObj('title2', 5, 'auth1', 300, 'pub2', 1);
Box1.addBook(book2);

var book3 = new bookObj('title3', 6, 'auth1', 600, 'pub3', 6);
Box2.addBook(book3);

var book4 = new bookObj('title4', 2, 'auth1', 700, 'pub4', 3);
Box2.addBook(book4);

var book5 = new bookObj('title5', 7, 'auth1', 300, 'pub5', 1);
Box2.addBook(book5);

console.log('Num of book instances =', bookObj.counter);
console.log('Num of books inside the 1st box =', Box1.getNumOfBooks());
console.log("------------------------------------");
console.log('Num of books inside the 2nd box =', Box2.getNumOfBooks());
console.log(Box1.toString());
console.log(Box2.toString());
console.log(Box1.valueOf() + Box2.valueOf());
