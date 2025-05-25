const { MathUtils, obj, sayHelloWorld , doSomeThingLater } = require('../index');

describe("MathUtils", function () {
  let math;

  beforeEach(function () {
    math = new MathUtils();
  });

  describe("sum", function () {
    it("should return 5 for 2 + 3", function () {
      expect(math.sum(2, 3)).toBe(5);
    });

    it("should return -1 for -3 + 2", function () {
      expect(math.sum(-3, 2)).toBe(-1);
    });

    it("should return 0 for 0 + 0", function () {
      expect(math.sum(0, 0)).toBe(0);
    });
  });

  describe("substract", function () {
    it("should return 1 for 3 - 2", function () {
      expect(math.substract(3, 2)).toBe(1);
    });

    it("should return -5 for -3 - 2", function () {
      expect(math.substract(-3, 2)).toBe(-5);
    });

    it("should return 0 for 5 - 5", function () {
      expect(math.substract(5, 5)).toBe(0);
    });
  });

  describe("multiply", function () {
    it("should return 6 for 2 * 3", function () {
      expect(math.multiply(2, 3)).toBe(6);
    });

    it("should return 0 for 5 * 0", function () {
      expect(math.multiply(5, 0)).toBe(0);
    });

    it("should return -8 for -2 * 4", function () {
      expect(math.multiply(-2, 4)).toBe(-8);
    });
  });

  describe("divide", function () {
    it("should return 2 for 6 / 3", function () {
      expect(math.divide(6, 3)).toBe(2);
    });

    it("should return 0.5 for 1 / 2", function () {
      expect(math.divide(1, 2)).toBe(0.5);
    });

    it("should return Infinity for 1 / 0", function () {
      expect(math.divide(1, 0)).toBe(Infinity);
    });
  });

  describe("average", function () {
    it("should return 3 for (2+4)/2", function () {
      expect(math.average(2, 4)).toBe(3);
    });

    it("should return 0 for (-2+2)/2", function () {
      expect(math.average(-2, 2)).toBe(0);
    });

    it("should return 1.5 for (1+2)/2", function () {
      expect(math.average(1, 2)).toBe(1.5);
    });
  });

  describe("factorial", function () {
    it("should return 1 for factorial of 0", function () {
      expect(math.factorial(0)).toBe(1);
    });

    it("should return 120 for factorial of 5", function () {
      expect(math.factorial(5)).toBe(120);
    });

    it("should throw error for negative numbers", function () {
      expect(() => math.factorial(-1)).toThrowError("There is no factorial for negative numbers");
    });
  });

  describe("checkPositivity", function () {
    it("should return true for positive number", function () {
      expect(math.checkPositivity(10)).toBeTrue();
    });

    it("should return true for 0", function () {
      expect(math.checkPositivity(0)).toBeTrue();
    });

    it("should return false for negative number", function () {
      expect(math.checkPositivity(-3)).toBeFalse();
    });
  });
});



describe("sayHelloWorld", function () {
  it("should return 'hello world'", function () {
    expect(sayHelloWorld(obj)).toBe("hello world");
  });

  it("should work with different mock", function () {
    const anotherObj = {
      hello: () => "hi",
      world: () => "earth"
    };
    expect(sayHelloWorld(anotherObj)).not.toBe("hello world");
  });

  it("should fail if world not found", function () {
    const wrongObj = {
      hello: () => "hello",
      Earth: () => "earth"
    };
    expect(()=> sayHelloWorld(wrongObj)).toThrowError("");
  });
});



describe("spy on",()=>{
    beforeAll(()=>{
        spyOn(obj,"world");
        sayHelloWorld(obj);
          sayHelloWorld(obj);
    })
    it("",()=>{
        expect(obj.world).toHaveBeenCalled();
    })

})

// * doSomeThingLater (Handling delay using done)

describe("doSomeThingLater (done)", function () {
  it("should return 12345", function (done) {
    doSomeThingLater(function (result) {
      expect(result).toBe(12345);
      done();
    });
  });

  it("should return a number type", function (done) {
    doSomeThingLater(function (result) {
      expect(typeof result).toBe("number");
      done();
    });
  });

  it("should resolve within a reasonable time", function (done) {
    const start = Date.now();
    doSomeThingLater(function (result) {
      const duration = Date.now() - start;
      expect(duration).toBeGreaterThanOrEqual(1000);
      expect(duration).toBeLessThan(2000);
      expect(result).toBe(12345);
      done();
    });
  });
});


// * doSomeThingLater (Handling delay using async/await)

function waitForCallback(fn) {
  return new Promise((resolve) => {
    fn(resolve);
  });
}

describe("doSomeThingLater (async/await)", function () {
  it("should return 12345", async function () {
    const result = await waitForCallback(doSomeThingLater);
    expect(result).toBe(12345);
  });

  it("should return a number type", async function () {
    const result = await waitForCallback(doSomeThingLater);
    expect(typeof result).toBe("number");
  });

  it("should resolve within a reasonable time", async function () {
    const start = Date.now();
    const result = await waitForCallback(doSomeThingLater);
    const duration = Date.now() - start;

    expect(duration).toBeGreaterThanOrEqual(1000);
    expect(duration).toBeLessThan(2000);
    expect(result).toBe(12345);
  });
});

