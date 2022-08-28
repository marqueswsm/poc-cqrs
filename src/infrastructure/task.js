class TaskInfrastructure {
  constructor(database) {
    this.database = database;
  }

  async create(data) {
    const { name, description } = data;
    await this.database.execute('INSERT INTO tasks VALUES (?,?);', [name, description]);
  }
}

module.exports = TaskInfrastructure;