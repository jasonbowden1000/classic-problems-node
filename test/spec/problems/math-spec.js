const expect = require('chai').expect;
const math = require('./../../../problems/math');

describe('Reverse digits', () => {
  it('should return a number in reverse order', () => {
    expect(math.reverseDigits(4242)).to.equal(2424);
  });

  it('should preserve the sign of reversed digits', () => {
    expect(math.reverseDigits(-314)).to.equal(-413);
  });

  it('should not return octals for numbers that end in zero', () => {
    expect(math.reverseDigits(2220)).to.equal(222);
  });
});
