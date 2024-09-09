import { Processor, Queue, Worker } from 'bullmq';
import redisConnection from './redisConnection';

export const createQueue = async (queueName: string) => {
  return new Queue(queueName, {
    connection: redisConnection,
  });
};

export const queueHandler = async (
  queueName: string,
  processData: Processor,
  eventHandler: Function
) => {
  try {
    const eventWorker = new Worker(queueName, processData, {
      connection: redisConnection,
    });
    eventWorker.on('completed', (job) => {
      console.log(`process completed for ${job.id}`);
      job.remove();
    });
    eventWorker.on('error', (job) => {
      console.log(
        `Job completed with result ${job.stack},${job.cause},${job.stack}`
      );
    });
    eventWorker.on('failed', (job) => {
      eventHandler(job?.data);
    });
  } catch (error) {
    console.log('error while processing error queue ', error);
  }
};

export const errorQueueHandler = async (
  queueName: string,
  processData: Processor
) => {
  try {
    const eventErrorQueueWorker = new Worker(queueName, processData, {
      connection: redisConnection,
    });
    eventErrorQueueWorker.on('completed', (job) => {
      console.log(`process completed in error queue for ${job.id}`);
      job.remove();
    });
    eventErrorQueueWorker.on('error', (job) => {
      console.log(
        `Job completed error queue with result ${job.stack},${job.cause}`
      );
    });
    eventErrorQueueWorker.on('failed', (job) => {
      job?.remove();
    });
  } catch (error) {
    console.log('error while processing error queue ', error);
  }
};
