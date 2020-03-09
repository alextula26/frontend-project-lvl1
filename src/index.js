/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import readlineSync from 'readline-sync';

export const greetingGame = () => {
  console.log('Welcome to the Brain Games!');
  return readlineSync.question('May I have your name? ');
};

export const greetingUser = (name) => `Hello, ${name}`;

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isEven = (number) => number % 2 === 0;

export const isAnswer = (answer) => {
  let result;
  const answerArray = [['yes', true], ['no', false]];
  for (const [key, value] of answerArray) {
    if (key === answer) {
      result = value;
    }
  }
  return result;
};

export const even = (name, message, count) => {
  console.log(message);
  const iter = (acc) => {
    if (acc === count) {
      return `Congratulations, ${name}!`;
    }

    const number = getRandom(10, 100);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');
    const evenNumber = isEven(number);
    const answerUser = isAnswer(answer);

    if (evenNumber === answerUser) {
      console.log('Correct!');
    } else {
      return `"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`;
    }

    return iter(acc + 1);
  };

  return iter(0);
};

const expression = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

export const calc = (name, message, count) => {
  const operationArray = ['+', '-', '*'];
  console.log(message);

  const iter = (acc) => {
    if (acc === count) {
      return `Congratulations, ${name}!`;
    }

    const operandOne = getRandom(10, 100);
    const operandTwo = getRandom(10, 100);
    const operation = operationArray[acc];

    console.log(`Question: ${operandOne} ${operation} ${operandTwo}`);

    const answer = readlineSync.question('Your answer: ');

    const resultExpression = String(expression(operandOne, operandTwo, operation));

    if (resultExpression === answer) {
      console.log('Correct!');
    } else {
      return `"${answer}" is wrong answer ;(. Correct answer was "${resultExpression}".\nLet's try again, ${name}!`;
    }

    return iter(acc + 1);
  };

  return iter(0);
};
