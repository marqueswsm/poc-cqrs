class TaskController {
  constructor(context) {
    this.service = context.taskService;
  }

  create(req, res, next) {
    const response = this.service.create();
    res.status(200).send(response);
  }
  
  found(req, res, next) {
    const response = this.service.found();
    res.status(200).send(response);
  }
}

module.exports = TaskController;