import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const loginFormSchema = yupResolver(
  yup
    .object({
      email: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
      password: yup
        .string()
        .trim()
        .required('Password is required')
        .matches(/^[\x00-\x7F]+$/, 'Password format is not valid.'),
    })
    .required(),
);


export const forgotPassSchema = yupResolver(
  yup
    .object({
      phone: yup
        .string()
        .email('Please enter valid email')
        .required('Email is required'),
    })
    .required(),
);