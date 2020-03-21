import readlineSync from 'readline-sync';

export const greetUser = () => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const guessParity = (numberOfTries) => {
  const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  const congratulation = `Congratulations, ${userName}!`;

  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  let correctAnswers = 0;

  while (correctAnswers < numberOfTries) {
    const randomNumber = Math.floor(Math.random() * 100);
    const isEven = (number) => number % 2 === 0;
    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);

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
