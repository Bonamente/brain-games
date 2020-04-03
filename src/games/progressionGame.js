import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (firstElement, step, length) => {
  const progression = [];
  progression[0] = firstElement;

  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const generateData = () => {
  const firstElement = getRandomInt(0, 50);
  const progressionStep = getRandomInt(1, 10);
  const hiddenPosition = getRandomInt(0, progressionLength - 1);
  const progression = getProgression(firstElement, progressionStep, progressionLength);

  const answer = progression[hiddenPosition].toString();
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

const startProgressionGame = () => {
  runGame(description, generateData);
};

export default startProgressionGame;
