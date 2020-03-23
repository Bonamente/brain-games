import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (description, generateData) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const congratulation = `Congratulations, ${userName}!`;

  console.log(`Hello, ${userName}!\n${description}`);

  let correctAnswers = 0;

  while (correctAnswers < rounds) {
    const [askedQuestion, expectedAnswer] = generateData();
    const userAnswer = readlineSync.question(`Question: ${askedQuestion}\nYour answer: `);

    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(congratulation);
};

export default runGame;
