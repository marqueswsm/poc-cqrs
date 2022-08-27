const express = require('express');
const TaskController = require('./src/controller/task');
const TaskService = require('./src/service/task');

const app = express();

const taskService = new TaskService();
const taskController = new TaskController({ taskService });

app.post('/task',
  (req, res, next) => taskController.create(req, res, next));

app.get('/task',
  (req, res, next) => taskController.found(req, res, next),
);

app.get('/health', (req, res, next) => {
  res.send('up and running');
});

app.listen(3000, () => {
  console.log('Up and Running')
});
