import { SvgProps } from 'react-native-svg';
import Svg from '../assets/svg';
import { ColorValue, StyleProp, TextStyle, ViewStyle } from 'react-native';


export type ListTypes = 'address' | 'check' | 'radio' | 'none' | undefined;

export type items = undefined;

export type interfaceType = undefined;

export interface ListProps {
  item?: items;
  size?: number;
  type: ListTypes;
  isSelected: boolean;
  lebalsLine?: number;
  isSeprator?: boolean;
  rightIconSize?: number;
  checkColor?: ColorValue;
  onTextPress?: () => void;
  valueField?: interfaceType;
  labelField?: interfaceType;
  rightIconColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  onRightIconPress?: () => void;
  checkStyle?: StyleProp<ViewStyle>;
  onEditPress?: (item?: items) => void;
  itemTextStyle?: StyleProp<TextStyle>;
  rightContainer?: StyleProp<ViewStyle>;
  onDeletePress?: (item: number) => void;
  renderItem?: React.JSX.Element | undefined;
  rightIcon?: keyof typeof Svg | React.JSX.Element;
  setSelectedId?: (value: React.SetStateAction<any>) => void;
}

export interface ListViewProps {
  onPress?: () => void;
  isSeprator?: boolean;
  leftIconSize?: number;
  numberOfLines?: number;
  rightIconSize?: number;
  leftIconProps?: SvgProps;
  rightIconProps?: SvgProps;
  leftIconColor?: ColorValue;
  rightIconColor?: ColorValue;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  titleStyle?: StyleProp<TextStyle>;
  title?: string | React.JSX.Element;
  subTitleStyle?: StyleProp<TextStyle>;
  leftContainer?: StyleProp<ViewStyle>;
  listContainer?: StyleProp<ViewStyle>;
  titleContainer?: StyleProp<ViewStyle>;
  rightContainer?: StyleProp<ViewStyle>;
  subTitle?: string | React.JSX.Element;
  leftIcon?: React.JSX.Element | keyof typeof Svg;
  rightIcon?: React.JSX.Element | keyof typeof Svg;
}
