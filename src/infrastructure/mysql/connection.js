const mysql = require('mysql2');

class Database {
	connect() {
		try {
			return mysql.createConnection({
				host: 'mysql_server',
				user: 'root',
				password: 'root',
				database: 'cqrs'
			});
		} catch (error) {
			console.log(error)
		}
	}
}

module.exports = new Database();