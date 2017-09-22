import readlineSync from 'readline-sync';

const tries = 3;
const maxNumber = 100;
export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const game = () => {
    for (let i = 0; i < tries; i += 1) {
      const number = Math.floor(Math.random() * maxNumber); // number will be 0..100
      let correctAnswer = 'no';
      if (number % 2 === 0) {
        correctAnswer = 'yes';
      }
      console.log(`Question: ${number}`);
      const answer = readlineSync.question('Your answer: ');
      if (answer === correctAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
        return false;
      }
    }
    return true;
  };
  if (game()) {
    console.log(`Congratulations, ${name}`);
  }
};
