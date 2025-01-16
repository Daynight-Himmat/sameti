import Svg from '../../assets/svg';
import { View } from 'react-native';
import React, { useCallback } from 'react';
import SvgButton from '../svgButton/SvgButton';
import { useCounterStyle } from './CounterStyle';
import AppTextInput from '../textInput/AppTextInput';
import { CounterInterface } from '../../interfaces/commonInterface';

const Counter = React.memo(
  ({ onMinusPress, onPlusPress, ...rest }: CounterInterface) => {
    const { styles, colors } = useCounterStyle();

    const renderCounterButton = useCallback(
      (icon: keyof typeof Svg, onPress: () => void) => (
        <SvgButton
          size={10}
          icon={icon}
          onPress={onPress}
          iconColor={colors?.white}
          style={styles?.counterButton}
        />
      ),
      [colors, styles],
    );

    return (
      <View style={styles.counterContainer}>
        {renderCounterButton('minusIcon', onMinusPress)}
        <AppTextInput
          maxLength={2}
          style={styles.counterStyle}
          textStyle={styles.counterText}
          {...rest}
        />
        {renderCounterButton('plusIcon', onPlusPress)}
      </View>
    );
  },
);

export default Counter;
