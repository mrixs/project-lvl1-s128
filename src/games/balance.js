import { cons } from 'hexlet-pairs';
import getRandomNumber from '../util';
import newGame from '..';

const description = 'Balance the given number.';

const balanceNumber = (num) => {
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

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 9999);
  const answer = balanceNumber(question);
  return cons(String(question), String(answer));
};

export default () => newGame(description, getQuestionAndAnswer);
