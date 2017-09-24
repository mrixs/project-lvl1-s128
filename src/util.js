export const gcd = (num1, num2) => {
  const smallestNum = (num1 > num2) ? num2 : num1;
  for (let gcdNum = 2; gcdNum <= smallestNum; gcdNum += 1) {
    if ((num1 % gcdNum === 0) && ((num2 % gcdNum === 0))) {
      return gcdNum;
    }
  }
  return 1;
};

export const balanceNumber = (num) => {
  let sumOfDigits = 0;
  for (let i = 0; i < String(num).length; i += 1) {
    sumOfDigits += Number(String(num)[i]);
  }
  const iterBalance = (sumOfNumbers, numberOfDigits, balancedNumber) => {
    if (numberOfDigits === 0) {
      return Number(balancedNumber);
    }
    const digit = Math.floor(sumOfNumbers / numberOfDigits);
    const newSumOfNumbers = sumOfNumbers - digit;
    const newNumberOfDigits = numberOfDigits - 1;
    const newBalancedNumber = String(balancedNumber) + String(digit);
    return iterBalance(newSumOfNumbers, newNumberOfDigits, newBalancedNumber);
  };
  return iterBalance(sumOfDigits, String(num).length, '');
};

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
