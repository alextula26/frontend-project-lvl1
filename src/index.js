import readlineSync from 'readline-sync';

export default (description, func, steps = 3) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  console.log(description);

  const iter = (acc) => {
    if (acc === steps) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }

    const gameStepResult = func();
    const gameResult = gameStepResult[0];
    const answerUser = gameStepResult[1];

    if (gameResult !== answerUser) {
      console.log(`"${gameResult}" is wrong answer ;(. Correct answer was "${answerUser}".\nLet's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');

    return iter(acc + 1);
  };

  return iter(0);
};
