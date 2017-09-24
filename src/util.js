export const gcd = (num1, num2) => {
  const smallestNum = (num1 > num2) ? num2 : num1;
  for (let gcdNum = 2; gcdNum <= smallestNum; gcdNum += 1) {
    if ((num1 % gcdNum === 0) && ((num2 % gcdNum === 0))) {
      return gcdNum;
    }
  }
  return 1;
};

export const getRandomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
