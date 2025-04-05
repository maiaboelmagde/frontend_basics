class Item {
    getPages() {}
    showHierarchy(indent = 0) {}
}

class Book extends Item {
    constructor(title, pages) {
        super();
        this.title = title;
        this.pages = pages;
    }

    getPages() {
        return this.pages;
    }

    showHierarchy(indent = 0) {
        console.log(`- ${this.title} (${this.pages} pages)`);
    }
}

class Box extends Item {
    constructor(name) {
        super();
        this.name = name;
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    getPages() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
            total += this.items[i].getPages();
        }
        return total;
    }

    showHierarchy(indent = 0) {
        console.log(`${this.name} (${this.getPages()} pages)`);
        this.items.forEach(item => item.showHierarchy(indent + 2));
    }
}

const book1 = new Book('Harry Potter', 500);
const book2 = new Book('Lord of the Rings', 700);
const book3 = new Book('Clean Code', 350);

const box1 = new Box('Fantasy Box');
box1.add(book1);
box1.add(book2);

const box2 = new Box('Programming Box');
box2.add(book3);

const mainBox = new Box('Main Box');
mainBox.add(box1);
mainBox.add(box2);

mainBox.showHierarchy();

console.log(`Total Pages: ${mainBox.getPages()}`);
