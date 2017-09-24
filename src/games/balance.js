import { cons } from 'hexlet-pairs';
import { getRandomNumber, balanceNumber } from '../util';
import newGame from '../game-control';

const rules = 'Balance the given number.';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 9999);
  const answer = balanceNumber(question);
  return cons(String(question), String(answer));
};

export default () => newGame(rules, getQuestionAndAnswer);
