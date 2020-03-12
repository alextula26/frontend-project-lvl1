import readlineSync from 'readline-sync';

export default (description, func, steps = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  const iter = (acc) => {
    if (acc === steps) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const gameStepResult = func();
    const gameResult = gameStepResult[0];
    const userAnswer = gameStepResult[1];

    if (gameResult !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameResult}".\nLet's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');

    return iter(acc + 1);
  };

  return iter(0);
};
