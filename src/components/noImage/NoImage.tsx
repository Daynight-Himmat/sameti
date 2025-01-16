import React from 'react';
import Svg from '../../assets/svg';
import { StyleProp, View, ViewStyle } from 'react-native';

interface CommonProps {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
}

const NoImage: React.FC<CommonProps> = ({
  style = {},
  height = 80,
  width = 80,
}) => {
  return (
    <View style={style}>
      <Svg.noImageIcon height={height} width={width} />
    </View>
  );
};

export default NoImage;
