import Svg from '../../assets/svg';
import AppText from '../text/AppText';
import Divider from '../divider/Divider';
import React, { useCallback } from 'react';
import { useCheckBoxStyle } from './CheckBoxStyle';
import { View, Pressable, ColorValue, ViewStyle, StyleProp, TextStyle } from 'react-native';

interface Props {
  size?: number;
  labelField: string;
  value: boolean;
  lebalsLine?: number;
  isSeprator?: boolean;
  checkColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  checkStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckBox = React.memo(
  ({
    size,
    style,
    value,
    lebalsLine,
    checkStyle,
    checkColor,
    itemTextStyle,
    labelField = '',
    onChange,
    isSeprator = false,
  }: Props) => {
    const { styles, colors } = useCheckBoxStyle({
      size: size,
      isSelect: value,
    });
    const width = size ? size / 1.5 : 10;
    const height = size ? size / 1.5 : 10;

    const onContainerPress = useCallback(() => {
        onChange(pre => (pre = !pre));
    }, [onChange]);

    const renderCheck = useCallback(
      () => (
        <View style={[styles.checkContainer, checkStyle]}>
          {value && (
            <Svg.checkIcon
              width={width}
              height={height}
              fill={checkColor ? checkColor : colors.white}
            />
          )}
        </View>
      ),
      [width, height, colors, styles, checkColor, checkStyle, value],
    );

    const renderText = useCallback(
      () => (
        <AppText
                onPress={onContainerPress}
              style={[styles.itemText, itemTextStyle]}
              numberOfLines={lebalsLine || 1}>
              {`${
                labelField
              }`}
            </AppText>
      ),
      [onContainerPress, styles, itemTextStyle, lebalsLine, labelField],
    );

    return (
      <>
        <Pressable style={[styles.list, style]} onPress={onContainerPress}>
          <View style={styles.itemContainer}>
            {renderCheck()}
            {renderText()}
          </View>
        </Pressable>
        {isSeprator && <Divider />}
      </>
    );
  },
);

export default CheckBox;
