import { Router } from 'express';
import { query } from '../../db/db';

/**
 * **Ingredients**
 *
 * Handles all related ingredient endpoints.
 */

const router = Router();

/**
 * **Index**
 *
 * Response all ingredients.
 */
router.get('/', async (req, res) => {
	const rows = await query(
		'SELECT * FROM `inventory`.`ingredient` LIMIT 1000;'
	);

	res.json(rows);
});

export default router;
