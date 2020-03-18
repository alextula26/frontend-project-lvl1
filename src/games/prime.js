import gameEngine from '../index.js';
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

const gameDescription = '"yes" if given number is prime. Otherwise answer "no"';

const initGame = () => {
  const number = getRandomNumber(1, 50);

  const gameResult = (isPrime(number)) ? 'yes' : 'no';

  return [gameResult, number];
};

export default () => gameEngine(gameDescription, initGame, 3);
