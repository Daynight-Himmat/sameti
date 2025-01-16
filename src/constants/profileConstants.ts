import { CommonInterface } from '../interfaces/commonInterface';
import { ProfileProps } from '../interfaces/profileInterface';

export const PROFILE_DATA: ProfileProps[] = [
  {
    id: 1,
    title: 'Edit Profile',
    icon: 'personIcon',
    route: 'editProfile',
  },
  {
    id: 2,
    title: 'Available Stores',
    icon: 'storeIcon',
    route: 'availableStore',
  },
  {
    id: 3,
    title: 'Notification Settings',
    icon: 'notificationIcon',
    route: 'notificationSetting',
  },
  {
    id: 4,
    title: 'Users',
    icon: 'groupIcon',
    route: 'userList',
  },
  {
    id: 5,
    title: 'Change Password',
    icon: 'lockIcon',
    route: 'changePassword',
  },
  {
    id: 6,
    address: 'shipping',
    icon: 'addressIcon',
    route: 'shippingAddress',
    title: 'Shipping Address',
  },
  {
    id: 7,
    address: 'billing',
    icon: 'addressIcon',
    route: 'billingAddress',
    title: 'Billing Address',
  },
  {
    id: 8,
    title: 'Customer Contact',
    icon: 'phoneIcon',
    route: 'customerContact',
  },
  {
    id: 9,
    title: 'Order',
    icon: 'orderIcon',
    route: 'orderManagementList',
  },
  {
    id: 10,
    title: 'Returns',
    icon: 'returnOrderIcon',
    route: 'orderReturnList',
  },
  {
    id: 11,
    title: 'Log Out',
    icon: 'logOutIcon',
    iconColor: 'red',
    route: 'login',
  },
];

export const ADDRESS_TYPE: CommonInterface[] = [
  {
    id: 1,
    title: 'Home',
  },
  {
    id: 2,
    title: 'Office',
  },
  {
    id: 3,
    title: 'Site',
  },
];

export const LABELS = [
  'New Order',
  'Accepted',
  'Preparing For Delivery',
  'Dispatched',
  'Delivered',
];

export const ORDER_STATUS: string[] = ['Address', 'Contact', 'Order'];

export const ORDER_RETURN_STATUS: string[] = [
  'Order details',
  'Return address',
  'Return reason',
];

export const CUSTOMER_CONTACT: CommonInterface[] = [
  {
    id: 1,
    title: 'Use this contact for later use',
  },
];
