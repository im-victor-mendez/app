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
	const sql = await query('SELECT * FROM `inventory`.`ingredient` LIMIT 1000;');

	res.json(sql);
});

router.get('/usage/:ingredientName', (req, res) => {
	const { ingredientName } = req.params;

	const sql = `
	  SELECT
		ir.ingredient_name,
		SUM(ir.ingredient_weight) AS total_usage
	  FROM
		ingredient_recipe ir
	  WHERE
		ir.ingredient_name = ?
	  GROUP BY
		ir.ingredient_name;
	`;

	query(sql, [ingredientName]).then(value => {
		res.send(value);
	});
});

export default router;
