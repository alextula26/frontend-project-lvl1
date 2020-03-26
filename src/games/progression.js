import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const createProgression = (start, step, length) => {
  const iter = (value, count, acc) => {
    if (count === length) {
      return acc;
    }

    return iter(value + step, count + 1, [...acc, value]);
  };

  return iter(start, 0, []);
};

const setHiddenNumber = (array, index, char) => {
  const newArray = array.slice();
  newArray[index] = char;
  return newArray;
};

const getHiddenNumber = (array, index) => array[index];

const gameDescription = 'What number is missing in the progression?';

const generateGame = () => {
  const symbolReplace = '..';
  const length = 10;
  const startValue = getRandomNumber(1, length);
  const step = getRandomNumber(1, length);
  const hiddenIndex = getRandomNumber(1, length);

  const progression = createProgression(startValue, step, length);
  const progressionWithHiddenNumber = setHiddenNumber(progression, hiddenIndex, symbolReplace);

  const gameResult = String(getHiddenNumber(progression, hiddenIndex));
  const gameQuestion = progressionWithHiddenNumber.join(' ');

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, generateGame);
