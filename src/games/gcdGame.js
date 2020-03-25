import runGame from '../index.js';
import getRandom from '../random-number-generator.js';

const gcdGame = () => {
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
    const a = getRandom(150);
    const b = getRandom(150);
    const question = `${a} ${b}`;
    const answer = getGcd(a, b).toString();

    return [question, answer];
  };

  runGame(description, generateData);
};

export default gcdGame;
