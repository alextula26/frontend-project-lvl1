import readlineSync from 'readline-sync';

export default (description, func, steps = 3) => {
  const iter = (count) => {
    if (count === steps) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const [gameResult, userAnswer] = func();

    if (gameResult !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameResult}".\nLet's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');

    return iter(count + 1);
  };

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  return iter(0);
};
