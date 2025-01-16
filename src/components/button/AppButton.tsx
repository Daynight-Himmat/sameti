import {
  View,
  TextStyle,
  ViewStyle,
  StyleProp,
  ColorValue,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Svg from '../../assets/svg';
import AppText from '../text/AppText';
import { SvgProps } from 'react-native-svg';
import { useAppButtonStyle } from './AppButtonStyle';

interface Props {
  size?: number;
  title?: string;
  isLoading?: boolean;
  onPress: () => void;
  iconColor?: ColorValue;
  icon?: keyof typeof Svg;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  backgroundColor?: string | undefined;
}

const AppButton = React.memo(
  ({
    icon,
    size,
    title,
    style,
    onPress,
    isLoading,
    iconColor,
    labelStyle,
    backgroundColor,
  }: Props) => {
    const { styles, colors } = useAppButtonStyle({ backgroundColor });
    const SvgIcon = typeof icon === 'string' ? Svg[icon] : null;
    const svgProps: SvgProps = {
      width: size || 12,
      height: size || 12,
      fill: iconColor || colors?.white,
    };

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.button, style]}>
        {isLoading ? (
          <>
            <ActivityIndicator color={colors?.white} />
          </>
        ) : (
          <>
            {SvgIcon && (
              <View style={styles.iconSpace}>
                <SvgIcon {...svgProps} />
              </View>
            )}
            <AppText fontFamily={'semiBold'} style={[styles.label, labelStyle]}>
              {title}
            </AppText>
          </>
        )}
      </TouchableOpacity>
    );
  },
);

export default AppButton;
