import { Prisma, PrismaClient } from '@prisma/client';
import { IReturnType } from '../types/common';

const prisma = new PrismaClient();

export const getOne = async (
  data: Prisma.UserWhereInput
): Promise<IReturnType> => {
  try {
    const userData = await prisma.user.findFirst({
      where: data,
    });
    if (userData) {
      return { success: true, data: { resData: userData } };
    } else {
      return { success: false, data: { resData: {} } };
    }
  } catch (error) {
    return { success: false, data: { resData: {} }, error: error };
  }
};
