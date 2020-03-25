import runGame from '../index.js';
import getRandom from '../random-number-generator.js';

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const isEven = (number) => number % 2 === 0;

  const generateData = () => {
    const question = getRandom(100);
    const answer = isEven(question) ? 'yes' : 'no';

    return [question, answer];
  };

  runGame(description, generateData);
};

export default evenGame;
