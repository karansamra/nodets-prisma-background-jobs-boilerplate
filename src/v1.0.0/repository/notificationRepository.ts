import { Prisma, PrismaClient } from '@prisma/client';
import { IReturnType } from '../types/common';
const prisma = new PrismaClient();

export const createInAppNotifications = async (
  createNotificationData: Prisma.NotificationCreateInput
): Promise<IReturnType> => {
  try {
    const createdNotificationData = await prisma.notification.create({
      data: createNotificationData,
    });
    if (createdNotificationData)
      return { success: true, data: { resData: createdNotificationData } };
    else return { success: false, data: { resData: {} } };
  } catch (error) {
    return { success: false, data: { resData: {} }, error };
  }
};
