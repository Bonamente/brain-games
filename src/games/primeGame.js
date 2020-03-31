import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2 || (num > 2 && num % 2 === 0)) return false;

  const maxDivisor = Math.floor(Math.sqrt(num));

  for (let i = 3; i < maxDivisor; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateData = () => {
  const question = getRandomInt(0, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startPrimeGame = () => {
  runGame(description, generateData);
};

export default startPrimeGame;
