import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const gameRounds = 3;
const startGame = (roundNumber, questionAndAnswer) => {
  if (roundNumber === gameRounds) {
    return true;
  }
  const queAndAns = questionAndAnswer();
  const question = car(queAndAns);
  const answer = cdr(queAndAns);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === answer) {
    console.log('Correct!');
    return startGame(roundNumber + 1, questionAndAnswer);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
  return false;
};

export default (description, questionAndAnswerFunction) => {
  console.log('Welcome to the Brain Games!');
  if (description !== undefined) {
    console.log(`${description}\n`);
  }
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  if (questionAndAnswerFunction !== undefined) {
    const gameResult = startGame(0, questionAndAnswerFunction);
    const finalMessage = gameResult ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}`;
    console.log(finalMessage);
  }
};
