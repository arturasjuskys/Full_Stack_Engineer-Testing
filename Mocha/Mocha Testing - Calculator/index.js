
const Calculate = {
  factorial(input) {
    if (input === 0) return 0;
    const factors = [];
    for (i = input; i > 0; i--) {
      factors.push(i);
    };
    return factors.reduce((previousValue, currentValue) => {
      return previousValue * currentValue;
    });
  },
  sum(inputArray) {
    if(inputArray.length === 0){
      return 0
    }
    
    return inputArray.reduce((sum, value) => {
      return sum + value;
    });
  }
};

module.exports = Calculate;
