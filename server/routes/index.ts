import { Express } from 'express';
import recipes from './api/recipes';
import ingredients from './api/ingredients';
import inventory from './api/inventory';
import orders from './api/orders';
import menu from './api/menu';

export default (app: Express) => {
	app.use('/api/recipes', recipes);
	app.use('/api/ingredients', ingredients);
	app.use('/api/inventory', inventory);
	app.use('/api/orders', orders);
	app.use('/api/menu', menu);
};
