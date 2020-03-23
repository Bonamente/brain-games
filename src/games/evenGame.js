import runGame from '../index.js';

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateData = () => {
    const getRandom = (value) => Math.floor(Math.random() * value);
    const isEven = (number) => number % 2 === 0;

    const question = getRandom(100);
    const answer = isEven(question) ? 'yes' : 'no';

    return [question, answer];
  };

  runGame(description, generateData);
};

export default evenGame;
