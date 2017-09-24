import { cons } from 'hexlet-pairs';
import getRandomNumber from '../utils';
import newGame from '..';

const description = 'What number is missing in this progression?';

const progressionLength = 10;
const getQuestionAndAnswer = () => {
  const firstElement = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 10);
  const skippedElementPosition = getRandomNumber(1, progressionLength);
  let answer;
  let currentElement = firstElement;
  let question = '';
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === skippedElementPosition) {
      question += '.. ';
      answer = currentElement;
    } else {
      question += `${currentElement} `;
    }
    currentElement += step;
  }
  return cons(question, String(answer));
};

export default () => newGame(description, getQuestionAndAnswer);
