import readlineSync from 'readline-sync';

export default (description, func, steps = 3) => {
  const iter = (name, count) => {
    if (count === steps) {
      console.log(`Congratulations, ${name}!`);
      return true;
    }

    const [gameResult, gameQuestion] = func();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (gameResult !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameResult}".\nLet's try again, ${name}!`);
      return false;
    }

    console.log('Correct!');

    return iter(name, count + 1);
  };

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  return iter(userName, 0);
};
