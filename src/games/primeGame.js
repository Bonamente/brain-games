import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';
import isPrime from '../primality-test-function.js';

const primeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateData = () => {
    const question = getRandomInt(1000);
    const answer = isPrime(question) ? 'yes' : 'no';

    return [question, answer];
  };

  runGame(description, generateData);
};

export default primeGame;
