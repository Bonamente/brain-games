import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b > 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const generateData = () => {
  const a = getRandomInt(0, 150);
  const b = getRandomInt(0, 150);
  const question = `${a} ${b}`;
  const answer = getGcd(a, b).toString();

  return [question, answer];
};

const startGcdGame = () => {
  runGame(description, generateData);
};

export default startGcdGame;
