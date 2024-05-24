import dotenv from 'dotenv';
import express, { Express } from 'express';
import routes from './routes/index';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

// Environment config
dotenv.config();

// Setting Server
const app: Express = express();
const port = process.env.PORT || 3000;

// CORS
app.use(cors());

// Middleware to analyze requests in JSON format
app.use(bodyParser.json());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
routes(app);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
