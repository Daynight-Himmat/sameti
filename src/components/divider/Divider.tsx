import React from 'react';
import { ColorValue, View } from 'react-native';
import { useDividerStyle } from './DividerStyle';

interface Props {
  color?: ColorValue;
}

const Divider = ({ color }: Props) => {
  const { styles, colors } = useDividerStyle();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color ? color : colors.lightGray },
      ]}
    />
  );
};

export default Divider;
