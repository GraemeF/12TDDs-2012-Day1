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

  var describeExpectationsForStats = function(numbers, expected) {
      describe('given ' + JSON.stringify(numbers), function() {
        var result;

        beforeEach(function() {
          result = stats(numbers);
        });

        it('should have ' + expected.elements + ' element(s)', function() {
          result.elements.should.equal(expected.elements);
        });

        it('should have minimum of ' + expected.minimum, function() {
          result.minimum.should.equal(expected.minimum);
        });

        it('should have maximum of ' + expected.maximum, function() {
          result.maximum.should.equal(expected.maximum);
        });

        it('should average ' + expected.average, function() {
          result.average.should.equal(expected.average);
        });
      });
    };

  describeExpectationsForStats([5], {
    minimum: 5,
    maximum: 5,
    average: 5,
    elements: 1
  });

  describeExpectationsForStats([50, 40, 30], {
    minimum: 30,
    maximum: 50,
    average: 40,
    elements: 3
  });
});
