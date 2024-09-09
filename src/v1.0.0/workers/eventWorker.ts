import { errorQueueHandler, queueHandler } from '../../config/redisConfig';
import { eventsProducerForErrorHandling } from '../producers/eventProducer';
import { markEventAsExpired } from '../services/eventsService';
import { EventQueues } from '../types/events';

// Processor for Normal Queue Expired Events
const processEventQueue = async (job: any) => {
  try {
    const eventHandler = await markEventAsExpired(job?.data?.uuid);
    if (!eventHandler.success) {
      eventsProducerForErrorHandling(job.data);
      return { success: false, data: { resData: {} } };
    } else {
      return { success: true, data: { resData: {} } };
    }
  } catch (error) {
    console.error('Error processing job:', error);
    throw error;
  }
};

// Processor for Error Queue Expired Events
const processEventErrorHandlerQueue = async (job: any) => {
  try {
    const errorHandler = await markEventAsExpired(job?.data?.uuid);
    if (!errorHandler.success) {
      return { success: false, data: { resData: {} } };
    } else {
      return { success: true, data: { resData: {} } };
    }
  } catch (error) {
    console.error('Error processing job:', error);
    throw error;
  }
};

(async () => {
  //Event : Expired Event Notifications processor
  await queueHandler(
    EventQueues.Events,
    processEventQueue,
    eventsProducerForErrorHandling
  );
  //Event : Expired Event Notifications processor error handler
  await errorQueueHandler(EventQueues.Events, processEventErrorHandlerQueue);

  // Event : Send Notifications for upcoming events
  await queueHandler(
    EventQueues.Events,
    processEventQueue,
    eventsProducerForErrorHandling
  );
})();
