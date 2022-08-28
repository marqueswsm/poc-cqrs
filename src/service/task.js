class TaskService {
  constructor(context) {
    this.taskRepository = context.taskRepository;
  }
  create(data) {
    return this.taskRepository.create(data);
  }

  found() {
    return 'There is a task'
  }
}

module.exports = TaskService;