import { questions } from '../data/questions.js';

export const AXES = {
  style: ['cut', 'drift'],
  criterion: ['sense', 'context'],
  closure: ['close', 'open'],
  speed: ['quick', 'slow']
};

export const axisLabels = {
  cut: '끊음',
  drift: '흘림',
  sense: '감각',
  context: '맥락',
  close: '닫힘',
  open: '열림',
  quick: '빠름',
  slow: '느림'
};

const defaultScores = () => ({
  style: { cut: 0, drift: 0 },
  criterion: { sense: 0, context: 0 },
  closure: { close: 0, open: 0 },
  speed: { quick: 0, slow: 0 }
});

const buildMaxScores = () => {
  const maxScores = defaultScores();

  questions.forEach((question) => {
    question.choices.forEach((choice) => {
      choice.scores.forEach(({ axis, value, weight }) => {
        if (!maxScores[axis] || maxScores[axis][value] === undefined) return;
        maxScores[axis][value] += weight;
      });
    });
  });

  return maxScores;
};

const maxScores = buildMaxScores();

export function calculateResult(answers) {
  const scores = defaultScores();
  const lastAxisValue = {};

  questions.forEach((question) => {
    const answerId = answers[question.id];
    const choice = question.choices.find((item) => item.id === answerId);
    if (!choice) return;

    choice.scores.forEach(({ axis, value, weight }) => {
      if (!scores[axis] || scores[axis][value] === undefined) return;
      scores[axis][value] += weight;
      lastAxisValue[axis] = value;
    });
  });

  const selected = {};

  Object.entries(AXES).forEach(([axis, values]) => {
    const [a, b] = values;
    const normalizedA = maxScores[axis][a] ? scores[axis][a] / maxScores[axis][a] : 0;
    const normalizedB = maxScores[axis][b] ? scores[axis][b] / maxScores[axis][b] : 0;

    if (normalizedA > normalizedB) selected[axis] = a;
    else if (normalizedB > normalizedA) selected[axis] = b;
    else selected[axis] = lastAxisValue[axis] || a;
  });

  const key = `${selected.style}-${selected.criterion}-${selected.closure}-${selected.speed}`;

  return { key, scores, selected, maxScores };
}
