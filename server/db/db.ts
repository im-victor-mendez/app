import mysql, { QueryResult } from 'mysql2/promise';
import config from './config';

/**
 * Database
 *
 * Handles all basic database functions, like query executer.
 */

/**
 * **Query**
 * @param sql string Query instruction to be executed
 * @param params unknown Extra parameters that query needs to be executed, like variable values.
 * @returns Promise<QueryResult>
 */
export async function query(
	sql: string,
	params?: unknown
): Promise<QueryResult> {
	const connection = await mysql.createConnection(config);
	const [results] = await connection.execute(sql, params);

	connection.destroy();

	return results;
}
