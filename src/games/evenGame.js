import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateData = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question.toString(), answer];
};

const startEvenGame = () => {
  runGame(description, generateData);
};

export default startEvenGame;
