import { ThemeInterface } from '../interfaces/colors';

const LIGHT_COLORS = {
  red: '#CD2E31',
  blue: '#0000ff',
  gray: '#5c5b5b',
  error: '#dc3545',
  green: '#2EB85C',
  white: '#FFFFFF',
  black: '#000000',
  yellow: '#FFB600',
  orange: '#ffb800',
  purple: '#800080',
  primary: '#3683BC',
  darkRed: '#8b0000',
  darkGray: '#404040',
  darkBlue: '#3262A8',
  lightBlue: '#add8e6',
  lightGray: '#AAAAAA',
  strongBlue: '#1b6EC2',
  grayishBlue: '#C5C6C7',
  lightOrange: '#F6775B',
  veryLightGray: '#D9D9D9',
  backgroundColor: '#FFFFFF',
  darkGrayishBlue: '#818182',
  veryDarkLimeGreen: '#306843',
  transparent: 'rgba(0, 0, 0, 0)',
  lightGrayishLimeGreen: '#D1F1D8',
  toastError: 'rgba(246, 119, 91, 0.9)',
  toastSuccess: 'rgba(27, 227, 119, 0.9)',
};

const DARK_COLORS = {
  red: '#CD2E31',
  blue: '#0000ff',
  gray: '#5c5b5b',
  error: '#dc3545',
  white: '#FFFFFF',
  green: '#2EB85C',
  black: '#000000',
  yellow: '#FFB600',
  orange: '#ffb800',
  purple: '#800080',
  primary: '#454545',
  darkRed: '#8b0000',
  darkGray: '#404040',
  darkBlue: '#3262A8',
  lightGray: '#AAAAAA',
  lightBlue: '#add8e6',
  strongBlue: '#1b6EC2',
  grayishBlue: '#C5C6C7',
  lightOrange: '#F6775B',
  veryLightGray: '#D9D9D9',
  backgroundColor: '#FFFFFF',
  darkGrayishBlue: '#818182',
  veryDarkLimeGreen: '#306843',
  transparent: 'rgba(0, 0, 0, 0)',
  lightGrayishLimeGreen: '#D1F1D8',
  toastError: 'rgba(246, 119, 91, 0.9)',
  toastSuccess: 'rgba(27, 227, 119, 0.9)',
};

export const THEMES: ThemeInterface = {
  light: {
    mode: 'light',
    colors: LIGHT_COLORS,
  },
  dark: {
    mode: 'dark',
    colors: DARK_COLORS,
  },
};

export const DEFAULT_COLORS = {
  blue: '#3683BC',
  white: '#FFFFFF',
  blackOpacity: 'rgba(0, 0, 0, 0.5)',
};
