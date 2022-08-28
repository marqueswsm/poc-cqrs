class TaskService {
  constructor(context) {
    this.taskInfrastructure = context.taskInfrastructure;
  }

  create(data) {
    return this.taskInfrastructure.create(data);
  }

  found() {
    return 'There is a task'
  }
}

module.exports = TaskService;