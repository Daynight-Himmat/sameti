import React from 'react';
import {Text, TextProps} from 'react-native';
import {useAppTextStyle} from './AppTextStyle';

interface props extends TextProps {
  size?: number;
  color?: string;
}

const AppText = ({children, style, size, color, ...props}: props) => {
  const styles = useAppTextStyle({
    style: {},
    size,
    color,
  });
  return (
    <Text style={[styles.container, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
