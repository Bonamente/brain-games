import runGame from '../index.js';
import getRandomInt from '../random-number-generator.js';

const progressionGame = () => {
  const description = 'What number is missing in the progression?';
  const progressionLength = 10;

  const generateData = () => {
    const progressionStep = getRandomInt(10) + 1;
    const hiddenPosition = getRandomInt(10);
    const initialTerm = getRandomInt(50);
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

  runGame(description, generateData);
};

export default progressionGame;
