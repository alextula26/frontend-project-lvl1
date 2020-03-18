import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const initGame = () => {
  const number = getRandomNumber(10, 100);

  const gameResult = (isEven(number)) ? 'yes' : 'no';

  return [gameResult, number];
};

export default () => gameEngine(gameDescription, initGame);
