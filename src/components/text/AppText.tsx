import React from 'react';
import { FONTS } from '../../styles';
import { Text, TextProps } from 'react-native';
import { useAppTextStyle } from './AppTextStyle';

interface props extends TextProps {
  size?: number;
  color?: string;
  fontFamily?: keyof typeof FONTS;
}

const AppText = ({
  children,
  style,
  size,
  color,
  fontFamily = 'regular',
  ...props
}: props) => {
  const family = FONTS[fontFamily];
  const styles = useAppTextStyle({
    style: {
      fontFamily: family,
    },
    size,
    color,
  });
  return (
    <Text allowFontScaling={false} style={[styles.container, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
