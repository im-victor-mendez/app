import { Router } from 'express';
import { query } from '../../db/db';

/**
 * **Orders**
 *
 * Handles all related orders endpoints.
 */

const router = Router();

/**
 * **Index**
 *
 * Response all ingredients.
 */
router.get('/', async (req, res) => {
	const rows = await query('SELECT * FROM `inventory`.`order` LIMIT 1000;');

	res.json(rows);
});

export default router;
