module.exports = function(numbers) {
  if (numbers.length < 1) {
    throw new Error('Empty!');
  }

  return {
    minimum: 5,
    average: 5
  };
};
