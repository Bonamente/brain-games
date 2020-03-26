import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const calcGame = () => {
  const description = 'What is the result of the expression?';
  const operators = ['*', '+', '-'];

  const generateData = () => {
    const a = getRandomInt(50);
    const b = getRandomInt(50);
    const operator = operators[getRandomInt(operators.length)];
    const question = `${a} ${operator} ${b}`;
    let answer;

    switch (operator) {
      case '*':
        answer = a * b;
        break;
      case '+':
        answer = a + b;
        break;
      case '-':
        answer = a - b;
        break;
      default:
        break;
    }

    return [question, answer.toString()];
  };

  runGame(description, generateData);
};

export default calcGame;
