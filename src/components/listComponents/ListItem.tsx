import Svg from '../../assets/svg';
import AppText from '../text/AppText';
import Divider from '../divider/Divider';
import React, { useCallback } from 'react';
import SvgButton from '../svgButton/SvgButton';
import { useListItemStyle } from './ListItemStyle';
import { View, Pressable, ColorValue } from 'react-native';
import { interfaceType, ListProps } from '../../interfaces/listTypes/listType';

const ListItem = React.memo(
  ({
    size,
    item,
    type,
    style,
    rightIcon,
    lebalsLine,
    renderItem,
    valueField,
    labelField,
    isSelected,
    checkStyle,
    checkColor,
    onEditPress,
    onTextPress,
    onDeletePress,
    itemTextStyle,
    setSelectedId,
    rightIconColor,
    rightContainer,
    onRightIconPress,
    rightIconSize = 12,
    isSeprator = false,
  }: ListProps) => {
    const { styles, colors } = useListItemStyle({
      size: size,
      isSelect: isSelected,
      type: type,
    });
    const width = size ? size / 1.5 : 10;
    const height = size ? size / 1.5 : 10;

    const onContainerPress = useCallback(() => {
      if (item && valueField) {
        const valueType = (item as Record<interfaceType, any>)[valueField];
        return setSelectedId?.(valueType);
      }
      if (onTextPress) {
        return onTextPress();
      }
    }, [item, onTextPress, setSelectedId, valueField]);

    const renderIcon = useCallback(
      (
        icon: keyof typeof Svg | React.JSX.Element,
        onPress?: () => void,
        iconColor?: ColorValue,
      ) => (
        <SvgButton
          size={18}
          icon={icon}
          onPress={onPress}
          style={styles.iconContainer}
          iconColor={iconColor ? iconColor : colors?.gray}
        />
      ),
      [colors, styles],
    );

    const renderEditOrDeleteIcon = useCallback(
      () => (
        <>
          {onEditPress &&
            renderIcon(
              'editIcon',
              () =>
                valueField &&
                onEditPress?.((item as Record<interfaceType, any>)[valueField]),
            )}
          {onDeletePress &&
            renderIcon(
              'deleteIcon',
              () =>
                valueField &&
                onDeletePress?.(
                  (item as Record<interfaceType, any>)[valueField],
                ),
              colors?.red,
            )}
        </>
      ),
      [onEditPress, renderIcon, onDeletePress, colors, valueField, item],
    );

    const renderRightIcon = useCallback(
      () => (
        <View style={styles.row}>
          {rightIcon ? (
            <SvgButton
              icon={rightIcon}
              size={rightIconSize}
              onPress={onRightIconPress}
              style={[styles.rightContainer, rightContainer]}
              iconColor={rightIconColor ? rightIconColor : colors.gray}
            />
          ) : (
            renderEditOrDeleteIcon()
          )}
        </View>
      ),
      [
        styles,
        colors,
        rightIcon,
        rightIconSize,
        rightContainer,
        rightIconColor,
        onRightIconPress,
        renderEditOrDeleteIcon,
      ],
    );

    const renderRadio = useCallback(
      () => (
        <View style={styles.itemIconContainer}>
          {isSelected && <View style={styles.iconSubContainer} />}
        </View>
      ),
      [isSelected, styles],
    );

    const renderCheck = useCallback(
      () => (
        <View style={[styles.checkContainer, checkStyle]}>
          {isSelected && (
            <Svg.checkIcon
              width={width}
              height={height}
              fill={checkColor ? checkColor : colors.white}
            />
          )}
        </View>
      ),
      [width, height, colors, styles, checkColor, checkStyle, isSelected],
    );

    const renderType = useCallback(
      () =>
        type === 'radio' ? (
          renderRadio()
        ) : type === 'check' ? (
          renderCheck()
        ) : (
          <></>
        ),
      [type, renderRadio, renderCheck],
    );

    const renderText = useCallback(
      () => (
        <Pressable onPress={onContainerPress} style={styles.titleContainer}>
          {renderItem ? (
            renderItem
          ) : (
            <AppText
              style={[styles.itemText, itemTextStyle]}
              numberOfLines={lebalsLine || 1}>
              {`${
                labelField && (item as Record<interfaceType, any>)[labelField]
              }`}
            </AppText>
          )}
        </Pressable>
      ),
      [
        item,
        styles,
        renderItem,
        labelField,
        lebalsLine,
        itemTextStyle,
        onContainerPress,
      ],
    );

    return (
      <>
        <Pressable style={[styles.list, style]} onPress={onContainerPress}>
          <View style={styles.itemContainer}>
            {renderType()}
            {renderText()}
          </View>
          {renderRightIcon()}
        </Pressable>
        {isSeprator && <Divider />}
      </>
    );
  },
);

export default ListItem;
