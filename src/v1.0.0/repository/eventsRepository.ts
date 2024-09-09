import { Prisma, PrismaClient } from '@prisma/client';
import { IReturnType } from '../types/common';
const prisma = new PrismaClient();

export const get = async (
  eventQuery: Prisma.EventsWhereInput
): Promise<IReturnType> => {
  try {
    const eventsData = await prisma.events.findMany({
      where: {
        ...eventQuery,
      },
    });
    if (eventsData) {
      return { success: true, data: { resData: eventsData } };
    } else {
      return { success: false, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error: error };
  }
};

export const update = async (
  eventQuery: Prisma.EventsWhereUniqueInput,
  eventUpdateData: Prisma.EventsUpdateInput
): Promise<IReturnType> => {
  try {
    const updatedData = await prisma.events.update({
      where: eventQuery,
      data: eventUpdateData,
    });
    if (updatedData) {
      return { success: true, data: { resData: updatedData } };
    } else {
      return { success: false, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error: error };
  }
};

export const getEvent = async (
  eventQuery: Prisma.EventsWhereInput
): Promise<IReturnType> => {
  try {
    const eventDetails = await prisma.events.findFirst({
      where: {
        ...eventQuery,
      },
    });
    if (eventDetails) {
      return { success: true, data: { resData: eventDetails } };
    } else {
      return { success: false, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error: error };
  }
};
