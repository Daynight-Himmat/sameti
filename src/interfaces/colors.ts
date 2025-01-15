export type ThemeColors = {
  primary: string;
  toastError: string;
  toastSuccess: string;
  white: string;
  black: string;
  gray: string;
  lightOrange: string;
};

export type Theme = {
  mode: string;
  colors: ThemeColors;
};

export interface ThemeInterface {
  [index: string]: Theme;
}
