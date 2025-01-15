import React from 'react';
import {TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import {useAppButtonStyle} from './AppButtonStyle';
import AppText from '../text/AppText';

interface props {
  title: string;
  backgroundColor?: string | undefined;
  onPress: () => void;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

const AppButton = ({
  title,
  onPress,
  backgroundColor,
  labelStyle,
  style,
}: props) => {
  const styles = useAppButtonStyle({backgroundColor});

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.button, style]}>
      <AppText style={[styles.label, labelStyle]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default AppButton;
