const fs = require('fs');
const _ = require('lodash');

const shuffle = lines => {
  const header = lines[0];
  const rest =  _.shuffle(lines.slice(1, lines.length-1));

  return [header, ...rest];
};

const readFile = fileName =>
  fs.readFileSync(`../original/${fileName}`, 'utf8').toString().split('\n');

const writeToFile = (data, name) => fs.writeFile(`../input/${name}.csv`, data.join('\n'), err => {
  if (err) throw err;
});

const train = data => data.slice(0, parseInt(lines.length * 0.4));
const test = data => [data[0], ...data.slice(parseInt(lines.length * 0.4) + 1)];

const lines = readFile('recipeData.csv');

const shuffled = shuffle(lines);
const targetTrain = train(shuffled);
const targetTest = test(shuffled);

writeToFile(shuffled, 'shuffled');
writeToFile(targetTrain, 'train');
writeToFile(targetTest, 'test');
writeToFile(targetTest, 'check-test');
