import readlineSync from 'readline-sync';

const stepsCount = 3;

export default (description, generateGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(description);

  const iter = (count) => {
    if (count === stepsCount) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }

    const [gameResult, gameQuestion] = generateGame();

    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (gameResult !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${gameResult}".`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    console.log('Correct!');

    return iter(count + 1);
  };
  return iter(0);
};
