/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

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

export const even = (name) => {
  const iter = (acc) => {
    if (acc === 3) {
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
