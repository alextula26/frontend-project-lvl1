import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const initGame = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);

  const gameResult = String(gcd(number1, number2));
  const gameQuestion = `${number1} ${number2}`;

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, initGame);
