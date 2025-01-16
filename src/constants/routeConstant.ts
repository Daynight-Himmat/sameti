import {
  AddressListData,
  AddressDetailsData,
} from '../interfaces/addressInterface';
import {
  AddressType,
  CheckOutData,
  CustomerContact,
} from '../interfaces/cartInterface';
import { ChatResult } from '../interfaces/chatInterface';
import { OrderList } from '../interfaces/orderInterface';
import { BrandData } from '../interfaces/brandInterface';
import { ProfileProps } from '../interfaces/profileInterface';
import { BranchResponse } from '../interfaces/branchesInterface';
import { CustomerContactData } from '../interfaces/customerContact';
import { MarchantProductData } from '../interfaces/marchantInterface';

export type RootStackParamList = {
  home: {
    screen?: keyof RootStackParamList;
    params?: {
      storeId?: number;
      productId?: number;
      reviewType?: 'Store' | 'Product';
    };
  };
  resetPassword: {
    code: string;
    lid: string;
  };
  homeScreen: undefined;
  cartScreen: {
    storeId: number;
    screen?: keyof RootStackParamList;
  };
  profileScreen: {
    comeFrom?: keyof RootStackParamList;
  };
  content: {
    url?: string;
    header?: string;
  };
  chat: {
    chatData?: ChatResult;
    merchantName?: string;
    returnId?: number;
  };
  returnChat: {};
  cart: {
    screen?: keyof RootStackParamList;
    params?: {
      storeId: number;
      screen?: keyof RootStackParamList;
    };
  };
  login: {
    comeFrom?: keyof RootStackParamList;
  };
  brand: {
    storeId: number;
    getMarchantProduct: ({
      brandId,
      pageNumber,
    }: {
      brandId: number;
      pageNumber: number;
    }) => void;
  };
  order: undefined;
  splash: undefined;
  search: undefined;
  signUp: {
    comeFrom?: keyof RootStackParamList;
  };
  forgot: undefined;
  return: undefined;
  chatScreen: undefined;
  profile?: {
    screen?: keyof RootStackParamList;
    initial?: boolean;
    params?: {
      orderId?: number;
      orderRefundId?: number;
      comeFrom?: keyof RootStackParamList;
    };
  };
  productDetails: {
    storeId: number;
    productId: number;
    productData?: MarchantProductData;
  };
  orderInvoiceWithPayment: {
    screen: keyof RootStackParamList;
    params: {
      orderId?: number;
    };
  };
  chatList: {
    screen?: keyof RootStackParamList;
    params?: {
      chatData?: ChatResult;
      merchantName?: string;
      returnId?: number;
    };
  };
  branches: {
    storeId: number;
    branchDataUpdate?: (data?: BranchResponse) => void;
    comeFrom?: keyof RootStackParamList;
  };
  addReview: {
    storeId?: number;
    productId?: number;
  };
  dashboard: {
    comeFrom?: keyof RootStackParamList;
  };
  orderTrack: {
    orderId?: number;
    orderStatus?: string;
    comeFrom?: keyof RootStackParamList;
  };
  onboarding: undefined;
  categories: {
    storeId: number;
    categoryId?: number;
    subCategoryId?: number;
    onCategoriesSubmit?: (id?: number, subId?: number) => void;
  };
  editProfile: { data?: ProfileProps };
  orderReturn: {
    orderId?: number;
  };
  orderInvoice: {
    cid?: number;
    orderId?: number;
    comeFrom?: keyof RootStackParamList;
  };
  notification: undefined;
  orderCheckOut: {
    storeId: number;
  };
  availableStore: { data?: ProfileProps };
  changePassword: { data?: ProfileProps };
  addUser: { id?: number };
  orderReturnList: { data?: ProfileProps; orderData?: OrderList };
  cancelOrderList: {
    orderId?: number;
  };
  emailConfirmation: {
    email: string;
    lid: string;
  };
  orderReturnStatus: {
    orderRefundId: number;
    comeFrom?: keyof RootStackParamList;
  };
  notificationSetting: { data?: ProfileProps };
  orderManagementList: { data?: ProfileProps };
  userList: { data?: ProfileProps };
  reviewList: {
    storeId?: number;
    productId?: number;
    reviewType: 'Store' | 'Product';
  };
  addressList: { data?: ProfileProps };
  branchProducts: { storeId: number };
  billingAddress: { data?: ProfileProps };
  customerContact: { data?: ProfileProps };
  shippingAddress: { data?: ProfileProps };
  branchesDetails: { data: BranchResponse };
  brandDetails: { data: BrandData; storeId: number };
  addAddress: {
    billing?: number;
    shipping?: number;
    onAddressOptions?: string;
    addressData?: ProfileProps;
    addressListData?: AddressListData;
    billingAddress?: AddressType[];
    shippingAddres?: AddressType[];
    updateAddress?: AddressDetailsData;
    comeFrom?: keyof RootStackParamList;
    setBillingSave?: (value: boolean) => void;
    setShippingSave?: (value: boolean) => void;
    addresType?: 'billing' | 'shipping' | undefined;
    setBillingAddress?: React.Dispatch<React.SetStateAction<AddressType[]>>;
    setShippingAddress?: React.Dispatch<React.SetStateAction<AddressType[]>>;
  };
  orderPayment: {
    orderId?: number;
    data?: CheckOutData;
    marchantName?: string;
    comeFrom?: keyof RootStackParamList;
  };
  addCustomerContact: {
    id?: number;
    onContactOptions?: string;
    customer?: CustomerContactData;
    customerContact?: CustomerContact[];
    comeFrom?: keyof RootStackParamList;
    setContactSave?: (value: boolean) => void;
    setContactData?: React.Dispatch<React.SetStateAction<CustomerContact[]>>;
  };
};

type PickRootStackParamList<K extends keyof RootStackParamList> = {
  [P in K]: RootStackParamList[P];
};

export type ProfileStackParamsList = PickRootStackParamList<
  | 'login'
  | 'userList'
  | 'editProfile'
  | 'changePassword'
  | 'availableStore'
  | 'billingAddress'
  | 'shippingAddress'
  | 'orderReturnList'
  | 'customerContact'
  | 'notificationSetting'
  | 'orderManagementList'
>;

export const MODALS = {
  network: 'Network',
  calender: 'Calender',
  imageView: 'ImageView',
  chatBottom: 'ChatBottom',
  bottomSheet: 'BottomSheet',
  confirmation: 'Confirmation',
  orderActions: 'OrderActions',
  productOptions: 'ProductOptions',
  addToCartScheme: 'AddToCartScheme',
  searchCategories: 'SearchCategories',
  availableStoreInfo: 'AvailableStoreInfo',
  availableStoreCheckBox: 'AvailableStoreCheckBox',
};

export const tagType = {
  chat: 'chat',
  newChat: 'newChat',
  chatList: 'chatList',
  userList: 'userList',
  cartList: 'cartList',
  orderList: 'orderList',
  getProfile: 'getProfile',
  userDetails: 'userDetails',
  addressList: 'addressList',
  cancelOrder: 'cancelOrder',
  orderReturn: 'orderReturn',
  orderInvoice: 'orderInvoice',
  customerList: 'customerList',
  orderCheckOut: 'orderCheckOut',
  availableStore: 'availableStore',
  customerDetails: 'customerDetails',
  notificationSetting: 'notificationSetting',
};
