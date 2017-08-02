const expect = require('chai').expect;
const recursion = require('./../../../problems/recursion');

let powerSetContext = (powerSet) => {
  describe(powerSet.name, () => {
    it('should return an array of 2^length elements', () => {
      let sampleSet = ['moe', 'larry', 'curly'];
      let powerSet = recursion.powerSet(sampleSet);
      expect(powerSet).to.have.lengthOf(Math.pow(2, sampleSet.length));
      expect(powerSet).to.include.deep.members([[], ['moe'], ['larry'], ['curly'],
        ['moe', 'larry'], ['moe', 'curly'], ['larry', 'curly'], ['moe', 'larry', 'curly']]);
    });

    it('should not modify the original array', () => {
      let sampleSet = ["moe", "larry", "curly"];
      recursion.powerSet(sampleSet);
      expect(sampleSet).to.have.lengthOf(3);
    });
  });
};

describe('recursion', () => {
  powerSetContext(recursion.powerSet);
  powerSetContext(recursion.powerSetViaBits);
});
