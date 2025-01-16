import {
  Pressable,
  StyleProp,
  ViewStyle,
  ColorValue,
  PressableProps,
} from 'react-native';
import React from 'react';
import Svg from '../../assets/svg';
import { useSvgButtonStyle } from './SvgButtonStyle';

interface Props {
  size?: number;
  isFab?: boolean;
  onPress?: () => void;
  iconColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  pressableProps?: PressableProps;
  icon?: keyof typeof Svg | React.JSX.Element;
}

const SvgButton = React.memo(
  ({
    icon,
    style,
    onPress,
    iconColor,
    size = 18,
    isFab = false,
    pressableProps,
  }: Props) => {
    const { styles, colors } = useSvgButtonStyle();
    const SvgIcon = typeof icon === 'string' ? Svg[icon] : null;
    const fill = iconColor || colors?.gray;
    const styleProp = isFab ? [styles?.favIcon, style] : style;

    return (
      <Pressable
        hitSlop={10}
        style={styleProp}
        onPress={onPress}
        {...pressableProps}>
        {typeof icon === 'string'
          ? SvgIcon && <SvgIcon width={size} height={size} fill={fill} />
          : icon}
      </Pressable>
    );
  },
);

export default SvgButton;
