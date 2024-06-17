/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, Request, Response } from 'express';
import cors from 'cors';
import express from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/', router);

app.use(globalErrorHandler);
app.use(notFound);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
