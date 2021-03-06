import gameEngine from '../index.js';
import getRandomNumber from '../random.js';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return NaN;
  }
};

const operations = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const generateGame = () => {
  const number1 = getRandomNumber(10, 100);
  const number2 = getRandomNumber(10, 100);
  const operationIndex = getRandomNumber(0, operations.length - 1);
  const operation = operations[operationIndex];

  const gameResult = String(calculate(number1, number2, operation));
  const gameQuestion = `${number1} ${operation} ${number2}`;

  return [gameResult, gameQuestion];
};

export default () => gameEngine(gameDescription, generateGame);
