import readlineSync from 'readline-sync';
import evenGame from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const runGame = () => {
  const number = getRandomNumber(10, 100);
  console.log(`Question: ${number}`);
  const gameResult = (isEven(number)) ? 'yes' : 'no';
  const answerUser = readlineSync.question('Your answer: ');

  return [gameResult, answerUser];
};

export default () => {
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  return evenGame(descriptionGame, runGame);
};
