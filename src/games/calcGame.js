import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const description = 'What is the result of the expression?';
const operators = ['*', '+', '-'];

const calculateMathExpression = (num1, num2, operator) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const generateData = () => {
  const a = getRandomInt(0, 50);
  const b = getRandomInt(0, 50);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${a} ${operator} ${b}`;
  const answer = calculateMathExpression(a, b, operator).toString();

  return [question, answer];
};

const startCalcGame = () => {
  runGame(description, generateData);
};

export default startCalcGame;
