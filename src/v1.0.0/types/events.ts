export const enum IsEventActive {
  Active = 1,
  Expired = 2,
}

export interface IEvents {
  uuid: string;
  name: string;
  days: string;
  eventLocation: string;
  eventDateTime: Date;
  eventLocationLatitude?: string;
  eventLocationLongitude?: string;
  membersCount?: number;
  eventImageDisplayName?: string;
}

export const enum EventQueues {
  Events = 'Events',
  ErrorHandler = 'Events-Error-Handler',
}

export const enum UpcomingEventQueues {
  Events = 'Upcoming-Events',
  ErrorHandler = 'Upcoming-Events-Error-Handler',
  NextDayEvent = 'Next-Day-Events',
  NextDayEventErrorHandler = 'Next-Day-Events-Error-Handler',
}

export const enum EventName {
  ExpiredEvent = 'expiredEvent',
  ErrorExpiredEvents = 'errorExpiredEvent',
  UpcomingEventInFiveDays = 'eventInFiveDays',
  ErrorUpcomingEventInFiveDays = 'errorEventInFiveDays',
  UpcomingEventInOneDays = 'eventOnNextDay',
  ErrorUpcomingEventInOneDays = 'errorEventOnNextDay',
}
