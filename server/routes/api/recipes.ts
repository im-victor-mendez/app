import { Router } from 'express';

/**
 * **Recipes**
 *
 * Handles all related recipes endpoints.
 */

const router = Router();

/**
 * **Index**
 *
 * Response all recipes
 */
router.get('/', (req, res) => {
	res.send('Recipes');
});

export default router;
