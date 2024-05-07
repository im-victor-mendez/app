import dotenv from 'dotenv';
import express, { Express } from 'express';
import routes from './routes/index';

// Environment config
dotenv.config();

// Setting Server
const app: Express = express();
const port = process.env.PORT || 3000;

// Routes
routes(app);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
