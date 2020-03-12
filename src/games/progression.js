import readlineSync from 'readline-sync';
import progressionGame from '../index.js';
import getRandomNumber from '../random.js';

const progression = (init, step) => {
  const iter = (value, count, acc) => {
    if (count === 10) {
      return acc;
    }

    return iter(value + step, count + 1, [...acc, value]);
  };

  return iter(init, 0, []);
};

const setHiddenNumber = (array, index, str) => {
  const newArray = array.slice();
  newArray[index] = str;
  return newArray;
};

const getHiddenNumber = (array, index) => array[index];

const runGame = () => {
  const progressionInit = getRandomNumber(1, 10);
  const progressionStep = getRandomNumber(1, 10);
  const progressionIndex = getRandomNumber(1, 10);

  const progressionArray = progression(progressionInit, progressionStep);
  const progressionWithHiddenNumber = setHiddenNumber(progressionArray, progressionIndex, '..');

  console.log(`Question: ${progressionWithHiddenNumber.join(' ')}`);

  const gameResult = String(getHiddenNumber(progressionArray, progressionIndex));
  const userAnswer = readlineSync.question('Your answer: ');

  return [gameResult, userAnswer];
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  return progressionGame(gameDescription, runGame, 1);
};
