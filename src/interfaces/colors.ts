export type ThemeColors = {
  red: string;
  blue: string;
  gray: string;
  white: string;
  error: string;
  black: string;
  green: string;
  yellow: string;
  purple: string;
  orange: string;
  primary: string;
  darkRed: string;
  darkGray: string;
  darkBlue: string;
  lightBlue: string;
  lightGray: string;
  strongBlue: string;
  toastError: string;
  lightOrange: string;
  grayishBlue: string;
  toastSuccess: string;
  veryLightGray: string;
  darkGrayishBlue: string;
  backgroundColor: string;
  veryDarkLimeGreen: string;
  lightGrayishLimeGreen: string;
};

export type Theme = {
  mode: string;
  colors: ThemeColors;
};

export interface ThemeInterface {
  [index: string]: Theme;
}
