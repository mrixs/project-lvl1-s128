import { cons } from 'hexlet-pairs';
import getRandomNumber from '../util';
import newGame from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const isPrime = (number) => {
  const iterIsPrime = (divider) => {
    if (number % divider === 0) {
      return false;
    }
    if (divider === 1) {
      return true;
    }
    return iterIsPrime(divider - 1);
  };
  const largestDivider = Math.floor(Math.sqrt(number));
  return iterIsPrime(largestDivider);
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => newGame(description, getQuestionAndAnswer);
