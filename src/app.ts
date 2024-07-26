import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import config from './app/config';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(
	cors({
		origin: ['http://localhost:3000', 'https://visit-mars-five.vercel.app/'],
		credentials: true
	})
);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
	res.send(`Server Running on port ${config.port}`);
});

// global error handler middleware
app.use(globalErrorHandler);

// not found middleware
app.use(notFound);

export default app;
