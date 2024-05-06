import { Express } from 'express';
import recipes from './api/recipes';

export default (app: Express) => {
	app.use('/api/recipes', recipes);
};
