import { Express } from 'express';
import recipes from './api/recipes';
import ingredients from './api/ingredients';

export default (app: Express) => {
	app.use('/api/recipes', recipes);
	app.use('/api/ingredients', ingredients);
};
