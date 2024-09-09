export const enum BackoffTypes {
  Exponential = 'exponential',
  Fixed = 'fixed',
}

export const defaultDelayTime = 5 * 60 * 1000;
export const defaultRetryAttempts = 3;

export interface ISubscriptionExpiredEvent {
  name: string;
  data: {
    uuid: string;
    priceId?: string;
    planId?: string;
    userId: string;
    status: string;
    isDeleted: boolean;
    stripeCustomerId: string;
  };
}
