// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
 module.exports = {
  client: 'mysql2',
  connection: {
    host: 'mysql_server',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'cqrs',
  },
  migrations: {
    tableName: 'migrations',
  },
};
