class TaskController {
  constructor(context) {
    this.service = context.taskService;
  }

  async create(req, res, next) {
    const data = req.body;
    await this.service.create(data);
    res.sendStatus(201);
  }
  
  found(req, res, next) {
    const response = this.service.found();
    res.status(200).send(response);
  }
}

module.exports = TaskController;