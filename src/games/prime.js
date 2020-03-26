import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const isPrime = (number) => {
  const iter = (count) => {
    if (number % count === 0) {
      return false;
    }

    const limit = Math.floor(number / 2);

    if (count === limit) {
      return true;
    }

    return iter(count + 1);
  };

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  }

  return iter(2);
};

const gameDescription = '"yes" if given number is prime. Otherwise answer "no"';

const generateGame = () => {
  const gameQuestion = getRandomNumber(1, 50);

  const gameResult = (isPrime(gameQuestion)) ? 'yes' : 'no';

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, generateGame);
