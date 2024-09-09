export interface IReturnType {
  success: boolean;
  data: { resType?: number; resData: any };
  error?: unknown;
  [key: string]: unknown;
}

export type TKeysWithUnknown = {
  [key: string]: unknown;
};

export type TKeysWithString = {
  [key: string]: string;
};

export type TKeysWithNumber = {
  [key: string]: number;
};

export type TKeysWithBoolean = {
  [key: string]: boolean;
};

export interface ICommonResourceProperties {
  uuid?: string;
  id?: number;
  isDeleted?: number;
  status?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export const enum IsDeleted {
  NotDeleted = 1,
  Deleted = 2,
}
