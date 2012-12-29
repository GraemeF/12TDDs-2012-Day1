var stats = require('./index');
require('chai').should();
var expect = require('chai').expect;

describe('stats', function() {
  describe('given an empty array', function() {

    it('should throw an error', function() {
      expect(function() {
        stats([]);
      }).to.
      throw ();
    });

  });

  describe('given [5]', function() {
    var result;

    beforeEach(function() {
      result = stats([5]);
    });

    it('should have 1 element', function() {
      result.elements.should.equal(1);
    });

    it('should have minimum of 5', function() {
      result.minimum.should.equal(5);
    });

    it('should have maximum of 5', function() {
      result.maximum.should.equal(5);
    });
    
    it('should average 5', function() {
      result.average.should.equal(5);
    });
  });
});
