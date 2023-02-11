require('dotenv').config()

const host = process.env.POSTGRES_HOST || '127.0.0.1';
const port = process.env.POSTGRES_PORT || 5432;
const username = process.env.POSTGRES_USER || 'db_user';
const database = process.env.POSTGRES_DB || 'school';
const password = process.env.POSTGRES_PASSWORD || 'db_user';

const isForGenerate = process.env.GENERATE || false;

module.exports = {
	type: 'postgres',
	host,
	port,
	username,
	password,
	ssl: {
    rejectUnauthorized: false
  },
	database,
	entities: isForGenerate ? ['src/**/*.entity.ts'] : undefined,
	migrationsTableName: 'migration',
	keepConnectionAlive: true,
	migrations: ['./migrations/*.js'],
	cli: {
		migrationsDir: 'migrations'
	}
};
