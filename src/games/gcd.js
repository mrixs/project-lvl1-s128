import { cons } from 'hexlet-pairs';
import getRandomNumber from '../util';
import newGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  const smallestNum = (num1 > num2) ? num2 : num1;
  for (let gcdNum = smallestNum; gcdNum >= 1; gcdNum -= 1) {
    if ((num1 % gcdNum === 0) && ((num2 % gcdNum === 0))) {
      return gcdNum;
    }
  }
  return 1;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(2, 100);
  const secondNumber = getRandomNumber(2, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return cons(question, answer);
};

export default () => newGame(description, getQuestionAndAnswer);
