import {
  CommonInterface,
  SortingInterface,
} from '../interfaces/commonInterface';
import { AvailableStoreInterface } from '../interfaces/availableStore';

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

export const SEARCH_BASE_URL = 'https://in8it.com/';

export const WOLSELEY_BRANCH = 'https://www.wolseley.co.uk/open-account/';

export const PDF_CATELOGS =
  'https://demo.justbuyuk.co.uk/files/pdf/1125/AKW%20Catalogue.pdf';

export const PAYMENT_STRIPE_DUMMY_BASE_URL =
  'https://rigorous-heartbreaking-cephalopod.glitch.me/';

export const PAYMENT_STRIPE_LOCAL_HOST = 'http://localhost:4242/';

export const COOKIE_POLICY = 'cookie-policy';
export const PRIVACY_POLICY = 'privacy-policy';
export const TERMS_CONDITIONS = 'terms-and-conditions';

export const SEARCH_ACCESS_CODE = 'dNK8J34Kmn7geUj';

export const HEADER_TEXT =
  "One or more store is available publicly, Please go to your profile and request for interested store shopping If you haven't already, If you have already requested please wait for support to respond to your request.";

export const TEXTINPUT_ICON_SIZE = 20;

export const CURRENCY = '£ ';

export const PUBLISH_MESSAGE =
  '* JustBuy may need to contact you briefly to verify the information above. By signing this reference, you acknowledge the need to do so. Please ensure you provide either a telephone number or email address.';

export const AVAILABLE_STORE: AvailableStoreInterface[] = [
  {
    id: 1,
    icon: 'approveIcon',
    iconColor: '#2eb85c',
    title: 'Your requested Schemes prices has been Approved.',
    schemeData: [],
  },
  {
    id: 2,
    icon: 'requestIcon',
    iconColor: '#F9B115',
    title: 'You have requested for Scheme Prices and waiting for Approval.',
    schemeData: [],
  },
  {
    id: 3,
    icon: 'blockIcon',
    iconColor: '#E55353',
    title: 'Request for Scheme prices has been Rejected.',
    schemeData: [],
  },
  {
    id: 4,
    icon: 'infoIcon',
    iconColor: '#321FDB',
    title:
      'When request for scheme is rejected, please untick the rejected scheme and save. After saving data, please tick again the scheme and save to initiate a new request.',
    schemeData: [],
  },
  {
    id: 5,
    icon: 'infoIcon',
    iconColor: '#321FDB',
    title:
      'When request for account number verification is rejected, please enter account number and save. After saving data, please enter account number again and save to initiate a new request.',
    schemeData: [],
  },
];

export const MARCHANT_OPTIONS: CommonInterface[] = [
  {
    id: 1,
    title: 'Brand',
  },
  {
    id: 2,
    title: 'Branches',
  },
  {
    id: 3,
    title: 'Reviews',
  },
  {
    id: 4,
    title: 'Account Registration',
  },
  {
    id: 5,
    title: 'Design Catelogs',
  },
  {
    id: 6,
    title: 'PDF Catelogs',
  },
];

export const SORT_OPTIONS: SortingInterface[] = [
  {
    id: 1,
    title: 'By Newest',
    sortBy: 'ProductId',
  },
  {
    id: 2,
    title: 'By Low-High',
    sortBy: 'priceLowHigh',
  },
  {
    id: 3,
    title: 'By High-Low',
    sortBy: 'priceHighLow',
  },
];

export const ORDER_ACTION: CommonInterface[] = [
  {
    id: 1,
    title: 'Cancel Order',
  },
  {
    id: 2,
    title: 'Re-order',
  },
  {
    id: 3,
    title: 'Track Order',
  },
  {
    id: 4,
    title: 'Order Invoice',
  },
  {
    id: 5,
    title: 'Order Return',
  },
];
