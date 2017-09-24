import { cons } from 'hexlet-pairs';
import getRandomNumber from '../util';
import newGame from '..';


const description = 'What number is missing in this progression?';

const progressionLength = 10;
const getQuestionAndAnswer = () => {
  const firstElement = getRandomNumber(0, 100);
  const step = getRandomNumber(0, 10);
  const skippedElementPosition = getRandomNumber(1, progressionLength);
  let answer;
  const iterProgression = (currentElement, currentElementPosition) => {
    if (currentElementPosition > progressionLength) {
      return '';
    }
    const nextElement = currentElement + step;
    const nextElementPosition = currentElementPosition + 1;
    if (currentElementPosition === skippedElementPosition) {
      answer = currentElement;
      return (`.. ${iterProgression(nextElement, nextElementPosition)}`);
    }
    return (`${currentElement} ${iterProgression(nextElement, nextElementPosition)}`);
  };
  const question = iterProgression(firstElement, 1);
  return cons(question, String(answer));
};

export default () => newGame(description, getQuestionAndAnswer);
