import React from 'react';
import Svg from '../../assets/svg';
import AppButton from './AppButton';
import { useAppButtonStyle } from './AppButtonStyle';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  borderRadius?: number;
  icon?: keyof typeof Svg;
  style?: StyleProp<ViewStyle>;
}

const RenderAppButton = ({
  title,
  icon,
  onPress,
  style,
  borderRadius,
}: Props) => {
  const { styles } = useAppButtonStyle({ borderRadius });

  return (
    <View style={styles.buttonContainer}>
      <AppButton
        icon={icon}
        title={title}
        onPress={onPress}
        labelStyle={styles.buttonText}
        style={[styles.buttonStyle, style]}
      />
    </View>
  );
};

export default RenderAppButton;
