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

router.post('/add', async (req, res) => {
	if (req.body == undefined) {
		return res.status(500).send('No body');
	}

	const { date, ingredient_name, quantity } = req.body;

	const script =
		'INSERT INTO `order` (date, ingredient_name, quantity) VALUES (?, ?, ?)';

	await query(script, [date, ingredient_name, quantity]).then(() => {
		res.send('Order added successfully');
	});
});

export default router;
