import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (description, generateData) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  const congratulation = `Congratulations, ${userName}!`;

  console.log(`Hello, ${userName}!`);
  console.log(`${description}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(congratulation);
};

export default runGame;
