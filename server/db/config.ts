import { ConnectionOptions } from 'mysql2';
import dotenv from 'dotenv';

/**
 * Database Configuration
 *
 * Handles all values to fetch data from database.
 */

dotenv.config();

const config: ConnectionOptions = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	connectTimeout: 60000,
	connectionLimit: 10,
	enableKeepAlive: false,
};

export default config;
