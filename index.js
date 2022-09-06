const express = require('express');
const TaskController = require('./src/controller/task');
const TaskService = require('./src/service/task');
const Database = require('./src/infrastructure/mysql/connection');
const TaskInfrastructure = require('./src/infrastructure/task');

const app = express();

const mysqlConnection = Database.connect();
const taskInfrastructure = new TaskInfrastructure(mysqlConnection);
const taskService = new TaskService({ taskInfrastructure });
const taskController = new TaskController({ taskService });

app.listen(3000, () => {
  console.log('Up and Running')
});
