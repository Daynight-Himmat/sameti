const LOG_IN = {
  label: 'Login',
  signUp: 'Sign Up',
  forgotPass: 'Forgot Password ?',
  createAccount: "Don't have an account? ",
  message: 'Enter credentials to continue...',
};

const PROFILE = {
  welcomeMessage: 'Welcome to Just Buy UK',
  access:
    'Sign in to unlock exclusive offers and discover top-quality products tailored just for you!',
};

const SEARCH = {
  address: 'Enter the postcode for search...',
  search: 'Please Search here...',
};

const SIGN_UP = {
  label: 'Create an Account',
  message: 'Enter Create Account to continue...',
  haveAccount: 'Already have an account? ',
  signIn: 'Sign In',
};

const EMPTY: string = 'No data found';

const FORGOT_PASSWORD = {
  label: 'Forgot Password?',
  message: 'Enter Email to for reset password',
};

const EMAIL_CONFIRMATION = {
  label: 'Email Confirmation',
  message: 'Please enter confirmation code received in registration email.',
  resendMessage:
    "If you didn't receive confirmation code on registration email.",
  resend: ' Resend code',
};

const CHANGE_PASSWORD = {
  label: 'Change Password',
  message: 'Update your new password for access.',
};

const RESET_PASSWORD = {
  label: 'Reset Password',
  message: 'Please enter new Password to reset.',
};

const EDIT_PROFILE = {
  editProfile:
    "<P style='color: #306843; font-size:12.0pt; padding: 0px 10px 0px 0px; margin: 0px 0px 10px 0px;'><br> Note: For pricing request of individual store, please visit <a href='justbuyuk://availableStore'>Available Store</a> tab.<br><P>",
};

const PLACEHOLDER = {
  name: 'Enter name',
  city: 'Enter city',
  date: 'DD-MM-YYYY',
  county: 'Enter county',
  country: 'Enter country',
  address: 'Enter Address',
  search: 'Search here...',
  writeHere: 'Write here...',
  password: 'Enter password',
  authority: 'Please select',
  lastName: 'Enter last Name',
  fullName: 'Enter full Name',
  phone: 'Enter phone number',
  cancelOrder: 'Write here...',
  postalCode: 'Enter postcode',
  email: 'Enter email address',
  firstName: 'Enter first Name',
  account: 'Account Number Link',
  userLevel: 'Select user level',
  code: 'Enter confirmation code',
  mobileNo: 'Enter mobile number',
  address1: 'Enter Address Line 1',
  address2: 'Enter Address Line 2',
  confirm: 'Enter confirm password',
  companyName: 'Enter company name',
  telephone: 'Enter telePhone number',
  businessName: 'Enter business Name',
  companyEmail: 'Enter company email',
  chatMessage: 'Write message here...',
  postCode: 'Enter postcode for address',
  branchCode: 'Please select branch code',
  contactName: 'Please enter contact name',
  currentPassword: 'Enter current password',
  addressType: 'Please select address type',
  companyType: 'Please select customer type',
  contactEmail: 'Please enter contact email',
  customerNote: 'Please enter note to drivers',
  contactPhone: 'Please enter contact phone no.',
  contactAddress: 'Please enter company address',
  companyContact: 'Enter company contact number',
  companyPhoneNumber: 'Enter company phone number',
  returnReason: 'Please enter the reason for return.',
  customerReference: 'Please enter customer reference no.',
  contactAlternatePhone: 'Please enter contact alternate phone number',
};

const REQUIRED = {
  honorific: 'required',
  name: 'Name is required',
  city: 'City is required',
  email: 'Email is required',
  store: 'Please select Store',
  county: 'County is required',
  country: 'Country is required',
  rating: 'Please select rates',
  address: 'Address is required',
  schemes: 'Schemes is required',
  document: 'Document is required',
  postCode: 'PostCode is required',
  password: 'Password is required',
  phone: 'Phone Number is required',
  fullName: 'Full Name is required',
  lastName: 'Last name is required',
  authority: 'Authority is required',
  firstName: 'First name is required',
  cancelReason: 'Please enter reason',
  code: 'Confirmation Code is required',
  mobileNo: 'Mobile number is required',
  expiryDate: 'Expiry Date is required',
  address1: 'Address Line 1 is required',
  address2: 'Address Line 2 is required',
  input: 'At least one input is required',
  companyName: 'Company name is required',
  contactName: 'Contact name is required.',
  contactType: 'Contact type is required.',
  addressType: 'Address type is required.',
  telephone: 'Telephone number is required',
  businessType: 'Business Type is required',
  companyEmail: 'Company email is required',
  reviewDate: 'ReviewDate Date is required',
  businessName: 'Business Name is required',
  contactEmail: 'Contact email is required.',
  contactPhone: 'Contact phone is required.',
  insertSomthing: 'Please insert something!',
  confirmPass: 'Confirm Password is required',
  orderNumber: 'Business Address is required',
  noteDriver: 'Current password is required.',
  message: 'Please Enter the required message',
  companyAddress: 'Company address is required',
  companyInfo: 'Company Information is required',
  returnReason: 'Please enter reason for return',
  currentDocument: 'Current Document is required',
  businessAddress: 'Business Address is required',
  currentPassword: 'Current password is required.',
  companyPostalCode: 'Company postalCode is required',
  companyPhoneNumber: 'Company phone number is required',
  agreeTerms: 'Please agree to JustBuyUk Terms and Conditions.',
};

const WARNING = {
  label: 'Warning',
  confirmation: 'Confirmation',
  logInLabel: 'Log out',
  inActiveAddress: (value: string) =>
    `Are you sure you want to ${value} Address?`,
  unAvailableStock: 'Stock not available',
  logInWarning: 'Are you sure do you want to log out.',
  userActive: (type: string, userType: 'user' | 'customer') =>
    `Are you sure to you want to ${type} ${userType}?.`,
  cancelWarning: 'Please select atleast one product to cancel',
  cancelPaymentSheet: 'Are you sure to cancel this payment',
  reOrderWarning:
    'If You Click yes than Your Previous Cart items will clear Are Your Sure want to reorder?',
  paymentMethod:
    'No Payment Method found, Please provide the payment method to directed to the payment integration to complete your purchase',
  paymentMethodFailed:
    'Something went wrong, we are unable to proceeding payment method. Please try after sometime',
  paymentConfirmation:
    "Are you sure you want to confirm your order? Please review your details before proceeding. Once confirmed, you'll be directed to the payment integration to complete your purchase",
  shippingAddress:
    'Please select any one of the shipping address from the list or add a new address',
  collectionId: 'Please select collection branch',
  billingAddress:
    'Please select any one of the Billing address from the list or add a new address',
  addressSelect:
    'Please select any one of the return address from the list or add a new address',
  copyAddress: (type: string) =>
    `Please select one of the ${type} address or fill up all details if adding new address`,
  createAddress: (type: string) =>
    `Please select any one of the ${type} address from the list or add a new address, even you can use this address to save as later use.`,

  contactSelect:
    'Please select any one of the contact from the list or add a new contact',
  productReturn: 'Please select product for returns',
  deleteFromCart: 'Are you sure you want to remove this product from the cart?',
  paymentProcess:
    'Your payment is currently being processed. Please do not close the app or navigate away from this screen until the transaction is complete',
};

const VALID = {
  email: 'Please enter valid email',
  phone: 'Phone Number is not valid.',
  mobileNumber: 'Mobile number is not valid.',
  telephone: 'Telephone number is not valid.',
  password: 'Password format is not valid.',
  confrimPassMatch: 'Confirm Password must match',
  passLimit: 'Password must be at least 8 characters.',
  specialChar:
    'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.',
};

export {
  VALID,
  EMPTY,
  LOG_IN,
  SEARCH,
  SIGN_UP,
  WARNING,
  PROFILE,
  REQUIRED,
  PLACEHOLDER,
  EDIT_PROFILE,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  CHANGE_PASSWORD,
  EMAIL_CONFIRMATION,
};
