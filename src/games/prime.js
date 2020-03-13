import readlineSync from 'readline-sync';
import primeGame from '../index.js';
import getRandomNumber from '../random.js';

const isPrime = (number) => {
  const iter = (count) => {
    if (count === number) {
      return true;
    }
    if (number % count === 0) {
      return false;
    }
    return iter(count + 1);
  };

  if (number < 2) {
    return false;
  }

  return iter(2);
};

const runGame = () => {
  const number = getRandomNumber(1, 50);

  console.log(`Question: ${number}`);

  const gameResult = (isPrime(number)) ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');

  return [gameResult, userAnswer];
};

export default () => {
  const gameDescription = '"yes" if given number is prime. Otherwise answer "no"';
  return primeGame(gameDescription, runGame, 3);
};
