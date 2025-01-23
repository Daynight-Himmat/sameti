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
      name: yup.string().required(''),
    })
    .required(),
);
