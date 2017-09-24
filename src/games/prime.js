import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import newGame from '..';

const description = 'Answer "yes" if number prime otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const isPrime = (number) => {
  const largestDivider = Math.floor(Math.sqrt(number));
  const iterIsPrime = (divider) => {
    if (divider > largestDivider) {
      return true;
    }
    if (number % divider === 0) {
      return false;
    }
    return iterIsPrime(divider + 1);
  };
  return iterIsPrime(2);
};
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = (isPrime(question)) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => newGame(description, getQuestionAndAnswer);
