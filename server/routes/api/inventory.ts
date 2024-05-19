import { Router } from 'express';
import { query } from '../../db/db';

/**
 * **Inventory**
 *
 * Handles all related inventory endpoints.
 */

const router = Router();

/**
 * **Index**
 *
 * Response all ingredients.
 */
router.get('/', async (req, res) => {
	const rows = await query('SELECT * FROM `inventory`.`inventory` LIMIT 1000;');

	res.json(rows);
});

export default router;
