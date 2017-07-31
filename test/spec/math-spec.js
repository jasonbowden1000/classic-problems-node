const expect = require('chai').expect;
const math = require('./../../problems/math');

let reverseDigitContext = (f) => {
  describe(f.name, () => {
    it('should return a number in reverse order', () => {
      let num = 4242;
      expect(f(num)).to.equal(2424);
    });

    it('should preserve the sign of reversed digits', () => {
      let num = -314;
      expect(f(num)).to.equal(-413);
    });

    it('should not return octals for numbers that end in zero', () => {
      let num = 2220;
      expect(f(num)).to.equal(222);
    });
  });
};

describe('math', () => {
  reverseDigitContext(math.reverseDigits);
  reverseDigitContext(math.bruteForceReverseDigits);
});
