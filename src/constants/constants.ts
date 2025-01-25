import { CommonInterface } from "../interfaces/commonInterface";

export const APP_NAME = 'Aapki Sameti';

export const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

export const PAGE_SIZE = 15;

export const ASYNC_STORE_VAR = {
  token: '@token',
  cartItem: '@cartItem',
  FCMToken: '@fcmToken',
  deviceId: '@deviceId',
  themeMode: '@theme_mode',
  access_token: '@access_token',
  stripePayment: '@stripePayment',
  refresh_token: '@refresh_token',
  isFirstTimeOpenApp: '@isFirstTimeOpenApp',
  cookies: '@cookies',
};

export const CURRENCY = '\u20b9 ';

export const INTEREST_TYPE: CommonInterface[] = [
  {
    id: 1,
    title: 'Half Monthly'
  },
  {
    id: 2,
    title: 'Monthly'
  },
  {
    id: 3,
    title: 'Quaterly'
  },
  {
    id: 4,
    title: 'Halfly'
  },
  {
    id: 5,
    title: 'Yearly'
  }
];

export const PENALTY_TYPE: CommonInterface[] = [
  {
    id: 1,
    title: 'A Fixed amount.'
  },
  {
    id: 2,
    title: 'A Fixed percentage of amount.'
  },
];
