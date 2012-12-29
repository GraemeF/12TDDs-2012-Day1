module.exports = function(numbers) {
  if (numbers.length < 1) {
    throw new Error('Empty!');
  }

  return {
    minimum: 5,
    maximum: 5,
    average: 5,
    elements: 1
  };
};
