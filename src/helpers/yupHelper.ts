import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { REQUIRED, VALID } from '../constants/stringConstants';

export const loginFormSchema = yupResolver(
  yup
    .object({
    mobile: yup
        .string()
        .required(REQUIRED.mobileNo),
      password: yup
        .string()
        .trim()
        .required(REQUIRED.password)
        .matches(/^[\x00-\x7F]+$/, VALID.password),
    })
    .required(),
);

export const signUpSchema = yupResolver(
  yup
    .object({
    name: yup
        .string()
        .required(REQUIRED.name),
        mobile: yup
        .string()
        .required(REQUIRED.mobileNo),
      password: yup
        .string()
        .trim()
        .required(REQUIRED.password)
        .matches(/^[\x00-\x7F]+$/, 'Password format is not valid.'),
    })
    .required(),
);


export const forgotPassSchema = yupResolver(
  yup
    .object({
      mobile: yup
        .string()
        .required(REQUIRED.mobileNo),
    })
    .required(),
);

export const changePasswordFormSchema = yupResolver(
  yup
    .object({
      currentPassword: yup
        .string()
        .required(REQUIRED.currentPassword),
      password: yup
        .string()
        .required(REQUIRED.password),
      confirmPassword: yup
        .string()
        .required(REQUIRED.confirmPass),
    })
    .required(),
);


export const resetPasswordFormSchema = yupResolver(
  yup
    .object({
      password: yup
        .string()
        .required('Email is required'),
        confirmPassword: yup
        .string()
        .required('Email is required'),
    })
    .required(),
);

export const createSametiSchema = yupResolver(
  yup
    .object({
      sametiName: yup.string().required(REQUIRED.sametiName),
      isFixDuration: yup.boolean().default(false),
      fixedDuration: yup.string().when('isFixDuration', {
          is: true,
          then: (schema: { required: (arg0: string) => any }) =>
            schema.required(REQUIRED.fixedDuration),
        }),
      isFixDate: yup.boolean().default(false),
      fixedDate: yup.string().when('isFixDate', {
          is: true,
          then: (schema: { required: (arg0: string) => any }) =>
            schema.required(REQUIRED.fixedDate),
        }),
      interestType: yup.string().required(REQUIRED.interestType),
      interestRate: yup.string().required(REQUIRED.interestRate),
      shareType: yup.string().required(REQUIRED.shareType),
      shareAmount: yup.string().required(REQUIRED.shareAmount),
      isSharePenalty: yup.boolean().default(false),
      sharePenaltyType: yup.string().required(REQUIRED.sharePenaltyType),
      sharePenalty: yup.string().when('isSharePenalty', {
          is: true,
          then: (schema: { required: (arg0: string) => any }) =>
            schema.required(REQUIRED.sharePenalty),
        }),
      isInterestPenalty: yup.boolean().default(false),
      interestPenaltyType: yup.string().required(REQUIRED.interestPenaltyType),
      interestPenalty: yup.string().when('isInterestPenalty', {
          is: true,
          then: (schema: { required: (arg0: string) => any }) =>
            schema.required(REQUIRED.interestPenalty),
        }),
      isLoanPenalty: yup.boolean().default(false),
      loanPenaltyType: yup.string().required(REQUIRED.loanPenaltyType),
      loanPenalty: yup.string().when('isLoanPenalty', {
          is: true,
          then: (schema: { required: (arg0: string) => any }) =>
            schema.required(REQUIRED.loanPenalty),
        }),
      isCaseStructure: yup.boolean().default(false),
      isOnlinePayment: yup.boolean().default(false),
    })
    .required(),
);
