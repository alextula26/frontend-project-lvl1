import readlineSync from 'readline-sync';
import gcdGame from '../index.js';
import getRandomNumber from '../random.js';

export const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const runGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  console.log(`Question: ${number1} ${number2}`);

  const gameResult = String(gcd(number1, number2));
  console.log(gameResult);
  const answerUser = readlineSync.question('Your answer: ');

  return [gameResult, answerUser];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return gcdGame(description, runGame);
};
