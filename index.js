var getAverage = function(numbers) {
    var sum = numbers.reduce(function(a, b) {
      return a + b;
    });
    return sum / numbers.length;
  };

var getMinimum = function(numbers) {
    return Math.min.apply(null, numbers);
  };

var getMaximum = function(numbers) {
    return Math.max.apply(null, numbers);
  };

module.exports = function(numbers) {
  if (numbers.length < 1) {
    throw new Error('Empty!');
  }

  return {
    minimum: getMinimum(numbers),
    maximum: getMaximum(numbers),
    average: getAverage(numbers),
    elements: numbers.length
  };
};
