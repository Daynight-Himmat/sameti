import type {
  StyleProp,
  TextStyle,
  ViewStyle,
  ImageStyle,
  TextInputProps,
} from 'react-native';
import type React from 'react';
import Svg from '../../../assets/svg';

interface Props extends TextInputProps {
  showIcon?: boolean;
  fontFamily?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  renderLeftIcon?: () => keyof typeof Svg | React.JSX.Element;
  renderRightIcon?: () => keyof typeof Svg | React.JSX.Element;
}

export type CTextInput = React.FC<Props>;
