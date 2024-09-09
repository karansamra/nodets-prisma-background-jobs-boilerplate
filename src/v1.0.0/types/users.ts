import { ICommonResourceProperties } from './common';

export interface IUser extends ICommonResourceProperties {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  deviceId?: string;
  newPassword?: string;
  oldPassword?: string;
  age?: number;
  dob?: string;
  otp?: string;
  verified?: boolean;
  endUserType?: number;
  notificationId?: number;
  userDetailsId?: number;
  userAdditionalDetailsId?: number;
  otpType?: number;
}

export const enum IsVerified {
  Verified = 1,
  NotVerified = 2,
}

export enum IUserType {
  Athlete = 1,
  Parent = 2,
}

export const isVerified = {
  yes: true, // verified from self side
  no: false, // not verified from
};

export const minAthleteAge = 12;
export const userReRegistrationDays = 45;

export const userRoleTypes = {
  Admin: {
    value: 1,
    name: 'Admin',
  },
  User: {
    value: 2,
    name: 'User',
  },
};

export interface IUserDetails extends ICommonResourceProperties {
  gender?: string;
  class?: string;
  highSchool?: string;
  profilePic?: string;
  profilePicDisplayName?: string;
  lacrosseClub?: string;
  subscriptionId?: number;
  planId?: number;
  stripeCustomerId?: number;
  stripeSubscriptionId?: string;
  stateOfResident?: string;
}

export interface IUserAdditionalDetails extends ICommonResourceProperties {
  height?: string;
  weight?: string;
  dominantHand?: string;
  verticalJump?: string;
  shotSpeed?: string;
  fortyYardDash?: string;
  fiveTenFive?: string;
  NTDPTeamMember?: number;
  NTDPCombineInvite?: number;
  highSchoolUSAAllAmerican?: number;
  womenNationalTournamentSchoolgirls?: number;
  underArmourOneFifty?: number;
}

export interface IRole extends ICommonResourceProperties {
  name?: string;
}
