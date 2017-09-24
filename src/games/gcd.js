import { cons } from 'hexlet-pairs';
import { getRandomNumber, gcd } from '../util';
import newGame from '../game-control';

const rules = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(2, 100);
  const secondNumber = getRandomNumber(2, 100);
  return cons(`${firstNumber} ${secondNumber}`, String(gcd(firstNumber, secondNumber)));
};

export default () => newGame(rules, getQuestionAndAnswer);
