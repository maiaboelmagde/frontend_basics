import * as chai from 'chai';
const { assert, expect } = chai;
const should = chai.should();

import { capitalizeText, createArray } from '../index.js';

describe('Testing capitalizeText', () => {
  it("Should capitalize the string", () => {
    expect(capitalizeText("hamada")).to.equal("HAMADA");
  });

  it("Should throw TypeError when input is not a string", () => {
    expect(() => capitalizeText(12)).to.throw(TypeError, "parameter should be string");
  });

  it("Returned value should be a string", () => {
    capitalizeText("hello").should.be.a("string");
  });
});


describe('Testing createArray', () => {
  it("should return a value of type array ", () => {
    expect(createArray(3)).to.be.an('array');
  });

  it("should return array of length 3 and include 1", () => {
    const result = createArray(3);
    assert.isArray(result, "result should be an array");
    assert.lengthOf(result, 3, "array should have length 3");
    assert.include(result, 1, "array should include 1");

    //expect(result).to.be.an('array').that.includes(1).and.has.lengthOf(3);
    //result.should.be.an('array').that.includes(1).and.has.lengthOf(3);


  });

  it("should return [0,1,2,3,4] when input is 5 ", () => {
    assert.deepEqual(createArray(5), [0, 1, 2, 3, 4]);
  });

  it("should return [0,1,2] after 5 seconds", function (done) {
    this.timeout(6000);
    setTimeout(() => {
      expect(createArray(3)).to.deep.equal([0, 1, 2]);
      done();
    }, 5000);
  });

  it.skip("pending test", () => {
  });
});
