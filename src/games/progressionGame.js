import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateData = () => {
  const progressionStep = getRandomInt(0, 10) + 1;
  const hiddenPosition = getRandomInt(0, progressionLength - 1);
  const initialTerm = getRandomInt(0, 50);
  const progression = [];
  progression[0] = initialTerm;

  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  const answer = progression[hiddenPosition].toString();
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startProgressionGame = () => {
  runGame(description, generateData);
};

export default startProgressionGame;
