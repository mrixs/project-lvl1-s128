import { cons } from 'hexlet-pairs';
import getRandomNumber from '../util';
import newGame from '..';

const description = 'What is the result of the expression?';
const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);
  switch (getRandomNumber(1, 3)) {
    case 1:
      return cons(`${firstNumber} + ${secondNumber}`, String(firstNumber + secondNumber));
    case 2:
      return cons(`${firstNumber} - ${secondNumber}`, String(firstNumber - secondNumber));
    default:
      return cons(`${firstNumber} * ${secondNumber}`, String(firstNumber * secondNumber));
  }
};

export default () => newGame(description, getQuestionAndAnswer);
