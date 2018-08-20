const expect = require('chai').expect;
const string = require('./../../../src/problems/string');

describe('String processing', () => {
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
  describe('romanToArabic', () => {
    it('should return its arabic representation', () => {
      expect(string.romanToArabic('MDCCCLXVI')).to.equal(1866);
      expect(string.romanToArabic('XIV')).to.equal(14);
      expect(string.romanToArabic('LXXXIX')).to.equal(89);
      expect(string.romanToArabic('XCI')).to.equal(91);
      expect(string.romanToArabic('DCCCXC')).to.equal(890);
      expect(string.romanToArabic('MCMLXXXIX')).to.equal(1989);
    });
  });
  describe('isRoman', () => {
    it('should not accept more than three consecutive numerals', () => {
      expect(string.isRoman('XXXX')).to.be.false;
    });
    it('should reject any sequential repetition of V, L, or D', () => {
      expect(string.isRoman('LL')).to.be.false;
      expect(string.isRoman('DDC')).to.be.false;
      expect(string.isRoman('XVV')).to.be.false;
    });
    it('should allow valid exceptions of order', () => {
      expect(string.isRoman('IV')).to.be.true;
      expect(string.isRoman('IX')).to.be.true;
      expect(string.isRoman('XC')).to.be.true;
      expect(string.isRoman('XL')).to.be.true;
      expect(string.isRoman('CD')).to.be.true;
      expect(string.isRoman('CM')).to.be.true;
      expect(string.isRoman('IC')).to.be.false;
      expect(string.isRoman('LC')).to.be.false;
      expect(string.isRoman('VX')).to.be.false;
      expect(string.isRoman('DM')).to.be.false;
    });
    it('should disallow biconsecutive valid order exceptions', () => {
      expect(string.isRoman('CDM')).to.be.false;
      expect(string.isRoman('IXC')).to.be.false;
      expect(string.isRoman('IVX')).to.be.false;
      expect(string.isRoman('XIXIX')).to.be.false;
      expect(string.isRoman('XVIV')).to.be.false;
      expect(string.isRoman('XIIV')).to.be.false;
      expect(string.isRoman('VIX')).to.be.false;
      expect(string.isRoman('XXC')).to.be.false;
      expect(string.isRoman('CCCXCCC')).to.be.false;
      expect(string.isRoman('LXL')).to.be.false;
      expect(string.isRoman('IXI')).to.be.false;
      expect(string.isRoman('IXXXI')).to.be.false;
    });
    it('should accept valid roman numerals', () => {
      expect(string.isRoman('XXX')).to.be.true;
      expect(string.isRoman('XIV')).to.be.true;
      expect(string.isRoman('CXC')).to.be.true;
      expect(string.isRoman('XIX')).to.be.true;
    });
  });
  describe('arabicToRoman', () => {
    it('should return the roman representation of a decimal number', () => {
      expect(string.arabicToRoman(1666)).to.equal('MDCLXVI');
      expect(string.arabicToRoman(91)).to.equal('XCI');
    });
  });
});
