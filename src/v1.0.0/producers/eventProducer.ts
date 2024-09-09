import { createQueue } from '../../config/redisConfig';
import { addDataToEventsQueue } from '../services/eventsService';
import {
  BackoffTypes,
  defaultDelayTime,
  defaultRetryAttempts,
} from '../types/bull';
import { TKeysWithString } from '../types/common';
import { EventName, EventQueues, UpcomingEventQueues } from '../types/events';

// Events: Expired Events fresh queue producer
export const eventsProducer = async function expiredEvents() {
  try {
    const eventQueue = await createQueue(EventQueues.Events);
    const eventsData = await addDataToEventsQueue();
    if (eventsData.success) {
      eventQueue.addBulk(eventsData.data.resData);
    }
  } catch (error) {
    console.log('error: ', error);
  }
};

// Events: Expired Events error queue producer
export const eventsProducerForErrorHandling = async function handelError(
  errorQueue: TKeysWithString
) {
  try {
    const eventsErrorHandler = await createQueue(EventQueues.ErrorHandler);
    await eventsErrorHandler.add(EventName.ErrorExpiredEvents, errorQueue, {
      attempts: defaultRetryAttempts,
      backoff: {
        type: BackoffTypes.Exponential,
        delay: defaultDelayTime,
      },
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

// Events: Upcoming event in five days error queue
export const upcomingEventInFiveDaysErrorProducer = async function handelError(
  eventsQueue: TKeysWithString
) {
  try {
    const eventsErrorHandler = await createQueue(
      UpcomingEventQueues.ErrorHandler
    );
    await eventsErrorHandler.add(
      EventName.ErrorUpcomingEventInFiveDays,
      eventsQueue
    );
  } catch (error) {
    console.log('error: ', error);
  }
};

// Events: Upcoming event on next day error queue
export const nextDayEventErrorProducer = async function handelError(
  eventsQueue: TKeysWithString
) {
  try {
    const eventsErrorHandler = await createQueue(
      UpcomingEventQueues.NextDayEventErrorHandler
    );
    await eventsErrorHandler.add(
      EventName.ErrorUpcomingEventInOneDays,
      eventsQueue
    );
  } catch (error) {
    console.log('error: ', error);
  }
};
