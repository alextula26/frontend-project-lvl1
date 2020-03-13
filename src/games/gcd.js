import readlineSync from 'readline-sync';
import gcdGame from '../index.js';
import getRandomNumber from '../random.js';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

const runGame = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);

  console.log(`Question: ${number1} ${number2}`);

  const gameResult = String(gcd(number1, number2));
  const userAnswer = readlineSync.question('Your answer: ');

  return [gameResult, userAnswer];
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  return gcdGame(gameDescription, runGame);
};
