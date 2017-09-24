import { cons } from 'hexlet-pairs';
import getRandomNumber from '../util';
import newGame from '..';

const description = 'Answer "yes" if number even otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const getQuestionAndAnswer = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => newGame(description, getQuestionAndAnswer);
