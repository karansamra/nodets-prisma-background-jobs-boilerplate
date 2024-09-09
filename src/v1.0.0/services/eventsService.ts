import { dateTimeFormats, getCurrentDateTime } from '../helpers/dates';
import * as eventsModel from '../repository/eventsRepository';
import { IReturnType, IsDeleted } from '../types/common';
import { EventName, IEvents, IsEventActive } from '../types/events';
import { expireEventNotifications } from './notificationService';

export const addDataToEventsQueue = async (): Promise<IReturnType> => {
  try {
    const expiredEvents = await eventsModel.get({
      eventDateTime: {
        lte: await getCurrentDateTime(dateTimeFormats['ISO-8601']),
      },
      isDeleted: IsDeleted.NotDeleted,
      status: IsEventActive.Active,
    });
    if (expiredEvents.success && expiredEvents.data.resData.length) {
      const expiredEventsData: IEvents[] = expiredEvents.data.resData.map(
        (events: IEvents) => {
          return {
            name: EventName.ExpiredEvent,
            data: { uuid: events.uuid },
          };
        }
      );
      return { success: true, data: { resData: expiredEventsData || [] } };
    } else {
      return { success: false, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error: error };
  }
};

export const markEventAsExpired = async (
  uuid: string
): Promise<IReturnType> => {
  try {
    const getEvent = await eventsModel.getEvent({
      uuid,
      eventDateTime: {
        lte: await getCurrentDateTime(dateTimeFormats['ISO-8601']),
      },
      status: IsEventActive.Active,
    });
    if (!getEvent.success) {
      return { success: false, data: { resData: {} } };
    }
    const expireEvent = await eventsModel.update(
      { uuid },
      {
        status: IsEventActive.Expired,
      }
    );
    if (!expireEvent.success) {
      return { success: false, data: { resData: getEvent.data.resData } };
    } else {
      await expireEventNotifications(getEvent.data.resData);
      return { success: true, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error: error };
  }
};
