import { ICommonResourceProperties } from './common';

export interface INotification extends ICommonResourceProperties {
  description: string;
  userId: number;
  isRead?: number;
  type: number;
}

export enum NotificationType {
  Event = 1,
  Subscription = 6,
}

export const enum Notifications {
  EventExpire = 'Hi @admin@ your active event @name@ has been expired!',
  UpcomingEvent = 'Hi @admin@ your event @name@ will be starting in @days@ days!',
  SubscriptionExpire = 'Hi @user@ your subscription will be expiring in @days@ days!',
}
