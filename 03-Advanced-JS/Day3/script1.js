var Shape = function () {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly.");
    }
}
Shape.prototype.area = function () {
    throw new Error("Method 'area' must be implemented.");
  };
  
  Shape.prototype.perimeter = function () {
    throw new Error("Method 'perimeter' must be implemented.");
  };
  
  Shape.prototype.toString = function () {
    return (
      "Dimensions: " +
      this.width +
      " x " +
      this.height +
      ", Area: " +
      this.area() +
      ", Perimeter: " +
      this.perimeter()
    );
  };

var Rectangle = function(width = 10, height = 10) {
    Shape.call(this);
    this.width = width || 0;
    this.height = height || 0;
  }
  Rectangle.prototype = Object.create(Shape.prototype);

  Rectangle.prototype.constructor = Rectangle;
  
  Rectangle.prototype.area = function () {
    return this.width * this.height;
  };
  
  Rectangle.prototype.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  
  Object.defineProperty(Rectangle.prototype, "width", {
    get: function () {
      return this._width;
    },
    set: function (value) {
      if (isNaN(value)) return;
      this._width = value;
    },
    enumerable: true,
    configurable: false,
  });
  
  Object.defineProperty(Rectangle.prototype, "height", {
    get: function () {
      return this._height;
    },
    set: function (value) {
      if (isNaN(value)) return;
      this._height = value;
    },
    enumerable: true,
    configurable: false,
  });



var Square = function(side) {
    Rectangle.call(this, side, side); 
    this.side = side;
    Square.squareCount = (Square.squareCount || 0) + 1;
    if (Square.squareCount > 1) {
      throw new Error("Only one Square object can be created.");
    }
  }
  
  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square;


  let rectangleInstance = null;

var SingletonRectangle = function(width, height) {
  if (rectangleInstance) {
    throw new Error("Only one Rectangle object can be created.");
  }
  Rectangle.call(this, width, height);
  rectangleInstance = this;
}

SingletonRectangle.prototype = Object.create(Rectangle.prototype);
SingletonRectangle.prototype.constructor = SingletonRectangle;

var Squar = new Square(10);
console.log(Squar.perimeter());
console.log(Squar.area());

var rect = new Rectangle(3, 9);
console.log(rect.perimeter());
console.log(rect.area());

var sq = new Square(9);
