import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const createProgression = (init, step, length) => {
  const iter = (value, count, acc) => {
    if (count === length) {
      return acc;
    }

    return iter(value + step, count + 1, [...acc, value]);
  };

  return iter(init, 0, []);
};

const setHiddenNumber = (array, index, char) => {
  const newArray = array.slice();
  newArray[index] = char;
  return newArray;
};

const getHiddenNumber = (array, index) => array[index];

const gameDescription = 'What number is missing in the progression?';

const initGame = () => {
  const progressionInit = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progressionIndex = getRandomNumber(1, 10);

  const progressionArray = createProgression(progressionInit, progressionStep, 10);
  const progressionWithHiddenNumber = setHiddenNumber(progressionArray, progressionIndex, '..');

  const gameResult = String(getHiddenNumber(progressionArray, progressionIndex));
  const gameQuestion = progressionWithHiddenNumber.join(' ');

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, initGame, 1);
