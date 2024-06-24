const { Suite } = require('tinybench');
const { nanoid } = require('nanoid');

const suite = new Suite();

suite.add('Generate Nano ID', () => {
  nanoid();
});

(async () => {
  await suite.run();
  console.table(suite.tasks.map(task => ({
    'Task Name': task.name,
    'Average Time (ms)': task.result.mean * 1000,
    'Variance (ms)': task.result.variance * 1000,
    'Samples': task.result.samples.length
  })));
})();
