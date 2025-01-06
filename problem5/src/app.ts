
import express, { Request, Response , Application } from 'express';
import * as mongoose from 'mongoose';
import dotenv from 'dotenv';
import routes from './modules/route';
import { errorHandler } from './middlewares/error.middleware';
import morgan from 'morgan';

//For env File 
dotenv.config();

const app: Application = express();
const port = parseInt(process.env.PORT as string) || 8000;

// Logger
app.use(morgan('dev'))

app.get('/health', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Init routes
app.use('/v1', routes);

// Error Handler 
//@ts-ignore
app.use(errorHandler);

app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
