import readlineSync from 'readline-sync';

export const greating = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);
};
export default greating;
