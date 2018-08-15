const expect = require('chai').expect;
const string = require('./../../../src/problems/string');

describe('isPalindrome', () => {
  it('should accept a palindromic word', () => {
    expect(string.isPalindrome('rotator')).to.be.true;
    expect(string.isPalindrome('redder')).to.be.true;
    expect(string.isPalindrome('a')).to.be.true;
    expect(string.isPalindrome('')).to.be.true;
  });
  it('should accept a capitalized palindrome', () => {
    expect(string.isPalindrome('Madam')).to.be.true;
  });
  it('should accept a palindromic sentence with non-alphabetic characters', () => {
    expect(string.isPalindrome('A car, a man, a maraca')).to.be.true;
  });
  it('should reject strings that are not palindromic', () => {
    expect(string.isPalindrome('jason')).to.be.false;
    expect(string.isPalindrome('dude')).to.be.false;
    expect(string.isPalindrome('axyza')).to.be.false;
  });
});
