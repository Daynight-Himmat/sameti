import React from 'react';
import AppText from '../text/AppText';
import { View, Switch } from 'react-native';
import { useSwitchStyle } from './SwitchStyle';

interface Props {
  leftText?: string;
  isSelect: boolean;
  rightText?: string;
  setSwitchValue: (value: boolean) => void;
}

const SwitchButton = React.memo(
  ({
    leftText,
    rightText,
    isSelect = false,
    setSwitchValue: setValue,
  }: Props) => {
    const { styles, colors } = useSwitchStyle();

    return (
      <View style={styles.switchContainer}>
        {leftText && (
          <AppText fontFamily={'medium'} style={styles.rightMessage}>
            {leftText}
          </AppText>
        )}
        <Switch
          value={isSelect}
          onValueChange={setValue}
          ios_backgroundColor={colors.veryLightGray}
          thumbColor={isSelect ? colors.veryLightGray : colors.green}
          trackColor={{ false: colors.veryLightGray, true: colors.green }}
        />
        {rightText && (
          <AppText fontFamily={'medium'} style={styles.leftMessage}>
            {rightText}
          </AppText>
        )}
      </View>
    );
  },
);

export default SwitchButton;
