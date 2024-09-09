import Redis from 'ioredis';
import * as dotenv from 'dotenv';
dotenv.config();
export const redisCredentials = {
  host: process.env.REDIS_HOST as string,
  port: parseInt(process.env.REDIS_PORT as string),
  password: process.env.REDIS_PASSWORD as string,
  maxRetriesPerRequest: null,
};

const redisConnection = new Redis(redisCredentials);

export default redisConnection;
