import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const progression = (start, step, index, length, char) => {
  const iter = (value, count, acc) => {
    if (count === length) {
      return acc;
    }
    return iter(value + step, count + 1, [...acc, count !== index ? value : char]);
  };

  return iter(start, 0, []);
};

const gameDescription = 'What number is missing in the progression?';

const generateGame = () => {
  const symbolReplace = '..';
  const length = 10;
  const startValue = getRandomNumber(1, length);
  const step = getRandomNumber(1, length);
  const hiddenElementIndex = getRandomNumber(0, length - 1);
  const gameResult = String(startValue + (step * hiddenElementIndex));
  const gameQuestion = progression(startValue, step, hiddenElementIndex, length, symbolReplace).join(' ');

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, generateGame);
