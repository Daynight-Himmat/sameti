import AppText from '../text/AppText';
import Divider from '../divider/Divider';
import React, { useCallback } from 'react';
import SvgButton from '../svgButton/SvgButton';
import { useCheckBoxStyle } from './CheckBoxStyle';
import { View, Pressable, ColorValue, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { CheckBoxSide } from '../../interfaces/commonInterface';

interface Props {
  size?: number;
  value: boolean;
  labelField: string;
  lebalsLine?: number;
  isSeprator?: boolean;
  checkColor?: ColorValue;
  checkBoxSide: CheckBoxSide;
  style?: StyleProp<ViewStyle>;
  checkStyle?: StyleProp<ViewStyle>;
  onChange: (...event: any[]) => void;
  itemTextStyle?: StyleProp<TextStyle>;
}

const CheckBox = React.memo(
  ({
    size,
    style,
    value,
    onChange,
    lebalsLine,
    checkStyle,
    checkColor,
    itemTextStyle,
    labelField = '',
    checkBoxSide = 'Right',
    isSeprator = false,
  }: Props) => {
    const { styles, colors } = useCheckBoxStyle({
      size: size,
      isSelect: value,
      checkBoxSide: checkBoxSide,
    });

    const onContainerPress = useCallback(() => {
        const v = value = !value;
        onChange(v);
    }, [onChange]);

    const renderCheck = useCallback(
      () => (
        <Pressable onPress={onContainerPress} hitSlop={10} style={[styles.checkContainer, checkStyle]}>
          {value && (
            <SvgButton
              icon={'checkIcon'}
              onPress={onContainerPress}
              size={size ? size / 1.5 : 10}
              iconColor={checkColor ? checkColor : colors.white}
            />
          )}
        </Pressable>
      ),
      [onContainerPress, styles, checkStyle, value, size, checkColor, colors],
    );

    const renderText = useCallback(
      () => (
        <AppText
          onPress={onContainerPress}
          fontFamily={'medium'}
          style={[styles.itemText, itemTextStyle]}
          numberOfLines={lebalsLine || 1}>
          {labelField}
        </AppText>
      ),
      [onContainerPress, styles, itemTextStyle, lebalsLine, labelField],
    );

    return (
      <>
        <View style={[styles.list, style]}>
          <View style={styles.itemContainer}>
            {checkBoxSide === 'Left' ?  (
              <>
                {renderCheck()}
                {renderText()}
              </>
            ) : (
              <>
                {renderText()}
                {renderCheck()}
              </>
            )}
          </View>
        </View>
        {isSeprator && <Divider />}
      </>
    );
  },
);

export default CheckBox;
