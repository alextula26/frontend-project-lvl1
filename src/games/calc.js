import readlineSync from 'readline-sync';
import calcGame from '../index.js';
import getRandomNumber from '../random.js';

const getExpression = (number1, number2, operation) => {
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

const runGame = () => {
  const number1 = getRandomNumber(10, 100);
  const number2 = getRandomNumber(10, 100);
  const operationIndex = getRandomNumber(0, operations.length - 1);
  const operation = operations[operationIndex];

  console.log(`Question: ${number1} ${operation} ${number2}`);

  const gameResult = String(getExpression(number1, number2, operation));
  const answerUser = readlineSync.question('Your answer: ');

  return [gameResult, answerUser];
};

export default () => {
  const descriptionGame = 'What is the result of the expression?';
  return calcGame(descriptionGame, runGame);
};
