import express, { Express } from 'express';
import dotenv from 'dotenv';

// Environment config
dotenv.config();

// Setting Server
const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
