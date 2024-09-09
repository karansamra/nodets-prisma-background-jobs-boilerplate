import * as notificationModel from '../repository/notificationRepository';
import * as userModel from '../repository/usersRepository';
import { IReturnType } from '../types/common';
import { IEvents } from '../types/events';
import {
  INotification,
  NotificationType,
  Notifications,
} from '../types/notification';
import { userRoleTypes } from '../types/users';

export const expireEventNotifications = async (
  inAppNotificationsData: IEvents
): Promise<IReturnType> => {
  try {
    const getSuperAdmin = await userModel.getOne({
      role: { some: { id: userRoleTypes.Admin.value } },
    });
    if (getSuperAdmin.success) {
      let notification = Notifications.EventExpire.replace(
        '@admin@',
        getSuperAdmin.data.resData.firstName +
          ' ' +
          getSuperAdmin.data.resData.lastName
      ).replace('@name@', inAppNotificationsData.name);
      const createNotification = {
        userId: getSuperAdmin.data.resData.id,
        description: notification,
        type: NotificationType.Event,
      };
      return await notificationModel.createInAppNotifications(
        createNotification
      );
    } else {
      return { success: false, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error };
  }
};

export const inAppNotifications = async (
  notification: INotification
): Promise<IReturnType> => {
  try {
    return await notificationModel.createInAppNotifications(notification);
  } catch (error) {
    return { success: false, data: { resData: {} }, error };
  }
};
