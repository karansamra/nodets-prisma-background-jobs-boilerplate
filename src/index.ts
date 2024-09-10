import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import './cron';
dotenv.config();
const app = express();
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT;
app.listen(port, () =>
  console.log(`API services application listening at http://localhost:${port}`)
);
