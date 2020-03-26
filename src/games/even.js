import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGame = () => {
  const gameQuestion = getRandomNumber(10, 100);

  const gameResult = (isEven(gameQuestion)) ? 'yes' : 'no';

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, generateGame);
