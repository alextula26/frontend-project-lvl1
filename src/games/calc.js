import readlineSync from 'readline-sync';
import calcGame from '../index.js';
import getRandomNumber from '../random.js';

const calculator = (number1, number2, operation) => {
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

  const gameResult = String(calculator(number1, number2, operation));
  const userAnswer = readlineSync.question('Your answer: ');

  return [gameResult, userAnswer];
};

export default () => {
  const gameDescription = 'What is the result of the expression?';
  return calcGame(gameDescription, runGame);
};