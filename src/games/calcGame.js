import runGame from '../index.js';

const calcGame = () => {
  const description = 'What is the result of the expression?';
  const getRandom = (value) => Math.floor(Math.random() * value);
  const operators = ['*', '+', '-'];

  const generateData = () => {
    const a = getRandom(50);
    const b = getRandom(50);
    const operator = operators[getRandom(operators.length)];
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
