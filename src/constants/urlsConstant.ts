export const URLS = {
  //  Auth
  login: 'Account/Login',
  logOut: 'Account/Logout',
  registration: 'JustBuyUK/registration',
  forgetPass: 'JustBuyUK/forgot-password',
  changePassword: 'JustBuyUK/change-password',
  refreshToken: 'Account/refresh-token',
  resetPassword: 'JustBuyUK/password-reset',
  resendOtp: (lid?: string) =>
    `JustBuyUK/resend/email-confirmation/code/${lid}`,

  // handheld api for provide user device id or firebase token,
  handheld: 'HandheldStartup/HandheldStartup',

  //  Store.
  merchant: 'Customer/store',
  emailConfirmation: (loginId?: string) =>
    `JustBuyUK/email-confirmation/${loginId}`,

  //  product: 'store/product',
  product: (store?: number) => `Customer/store/product?storeId=${store}`,
  productDetails: (storeId: number, productId: number) =>
    `Customer/store/${storeId}/product/${productId}`,
  category: 'Customer/Category/List',

  // Profile
  profile: 'Customer/profile',
  availableStore: 'Customer/available-stores',
  notificationSetting: 'Customer/notification',

  // Store branch
  branches: (storeId: number) => `Store/${storeId}/branches`,
  branchDetails: (storeId: number, branchId: number) =>
    `Store/${storeId}/branches/${branchId}`,

  // Brand branch
  brand: (storeId: number, owned: boolean) =>
    `Brand/store/${storeId}/brand/search?owned=${owned ? true : false}`,
  brandDetails: (storeId: number, brandId: number) =>
    `Brand/detail/store/${storeId}/brand/${brandId}`,

  //  Payment Service End Points
  stripeKey: 'stripe-key',
  paymentSheet: 'payment-sheet',
  customerSheet: 'customer-sheet',
  checkOutSession: 'create-checkout-session',
  createPaymentIntent: 'create-payment-intent',
  paymentIntent: 'payment-intent-for-payment-sheet',

  //  Address Verify
  searchAddress: 'Webservice/GetPostcodeAddressDetails',
  postalCode: (postalCode: string) => `VanStockAddress/verify/${postalCode}`,

  //  Contact User
  userType: 'CustomerUser',
  userList: 'CustomerUser/list',
  userDetails: (userId: number) => `CustomerUser/detail?id=${userId}`,
  userSave: (userId: number) =>
    userId ? `CustomerUser/save?id=${userId}` : 'CustomerUser/save',
  userActive: (userId?: number, userActive?: boolean) =>
    `CustomerUser/toggle-active?id=${userId}&isActive=${userActive}`,

  //  Customer Contact
  customerType: 'CustomerContact',
  customerList: 'CustomerContact/list',
  customerDetails: (customerContactId?: number) =>
    `CustomerContact/detail?id=${customerContactId}`,
  customerSave: (customerContactId?: number) =>
    customerContactId
      ? `CustomerContact/save?id=${customerContactId}`
      : 'CustomerContact/save',
  customerActive: (userId?: number, customerActive?: boolean) =>
    `CustomerContact/toggle-active?id=${userId}&isActive=${customerActive}`,

  // Order List
  orderList: 'Customer/orderlist',
  orderTrack: (orderId: number) => `Customer/order/track/${orderId}`,
  orderCancel: (orderId?: number) => `Customer/order/cancel/${orderId}`,

  //  Address
  addressList: (addressType: string) => `Address/${addressType}/list`,
  addressDetails: (addressType: string, addressId: number) =>
    `Address/${addressType}/detail?id=${addressId}`,
  addressSave: (addressType: string, addressId: number) =>
    addressId
      ? `Address/${addressType}/save?id=${addressId}`
      : `Address/${addressType}/save`,
  addressDelete: (deleteId: number, addressType: string, isActive: boolean) =>
    isActive
      ? `Address/${addressType}/delete/${deleteId}?active=${isActive}`
      : `Address/${addressType}/delete/${deleteId}`,

  // Order Cart
  cart: (storeId?: number) => `Order/cart?storeId=${storeId}`,
  cartList: 'Order/cart/list',
  updateCart: (storeId: number | undefined) => `Order/cart/update/${storeId}`,
  removeCart: (storeId?: number, shoppingCartId?: number) =>
    `Order/cart/remove/${storeId}/${shoppingCartId}`,

  // Order checkOut
  checkOut: (storeId?: number) => `Order/checkout/${storeId}`,
  checkOutSuccess: 'Order/check-success',
  checkoutCancel: (orderId?: number) =>
    `Order/checkout-cancel?orderId=${orderId}`,
  orderInvoice: (orderId?: number) => `Order/invoice/${orderId}`,
  orderDownloadInvoice: (orderId?: number, cid?: number) =>
    `Order/download-invoice/${orderId}?cid=${cid}`,
  stripePaymentIntent: (orderId?: number) =>
    `Order/stripe-payment-intent/${orderId}`,

  // Order Return List
  returnOrderList: 'Customer/order/return-list',
  returnOrderInfo: (orderId?: number) =>
    `Customer/order/return-info/${orderId}`,
  returnOrder: (orderId?: number) => `Customer/order/return/${orderId}`,

  //re-order list
  reOrder: (orderId?: number) => `Customer/reorder/${orderId}`,

  // order-filter
  orderFilter: 'Customer/order-filter',

  // Global Search
  globalSearch: 'JustBuyUK/global-search',

  // Review API
  review: (item?: string, sid?: number) =>
    `Review/customer/${item}/review/${sid}`,
  reviewList: (sid?: number, pid?: number) =>
    pid
      ? `Review/customer-review/list?sid=${sid}&pid=${pid}`
      : `Review/customer-review/list?sid=${sid}`,
  customerReview: (sid?: number, pid?: number) =>
    !pid && !sid
      ? 'Review/customer-review'
      : sid && !pid
      ? `Review/customer-review?sid=${sid}`
      : `Review/customer-review?sid=${sid}&pid=${pid}`,

  // Content Url API
  contentUrl: (url?: string) => `JustBuyUK/content/${url}`,

  // Notification List API
  notificationList: 'VanstockNotification/notification-list',

  // CHAT Chats-endpoints
  chat: 'Chat',
  chatList: 'Chat/list',
  newChat: 'Chat/new-message',
  getMsgByUniqueId: (id: string) => `Chat/messages/${id}`,
  chatSend: (id: string) => `Chat/send/${id}`,
  chatDocSend: (id: string) => `Chat/file/${id}`,
  returnOrderchatDocSend: (id: number) => `Chat/order-return/${id}/file`,
  returnOrderChat: (id: number) => `Chat/order-return/${id}/list`,
  returnOrderChatSend: (id: number) => `Chat/order-return/${id}/send`,
};
