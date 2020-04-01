import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const createProgression = (start, step, index, length) => {
  const iter = (value, count, acc) => {
    if (count === length) {
      return acc;
    }
    return iter(value + step, count + 1, [...acc, count !== index ? value : '..']);
  };

  return iter(start, 0, []);
};

const gameDescription = 'What number is missing in the progression?';

const generateGame = () => {
  const length = 10;
  const startValue = getRandomNumber(1, length);
  const step = getRandomNumber(1, length);
  const hiddenElementIndex = getRandomNumber(0, length - 1);
  const hiddenElementValue = startValue + (step * hiddenElementIndex);
  const progression = createProgression(startValue, step, hiddenElementIndex, length);
  const gameResult = String(hiddenElementValue);
  const gameQuestion = progression.join(' ');

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, generateGame);
