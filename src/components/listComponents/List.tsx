import AppText from '../text/AppText';
import Divider from '../divider/Divider';
import React, { useCallback } from 'react';
import { Pressable, View } from 'react-native';
import SvgButton from '../svgButton/SvgButton';
import { useListItemStyle } from './ListItemStyle';
import { ListViewProps } from '../../interfaces/listTypes/listType';

const ListView = React.memo(
  ({
    title,
    onPress,
    subTitle,
    leftIcon,
    rightIcon,
    titleStyle,
    isSeprator,
    numberOfLines,
    leftIconColor,
    subTitleStyle,
    listContainer,
    leftContainer,
    rightIconColor,
    rightContainer,
    titleContainer,
    onLeftIconPress,
    onRightIconPress,
    leftIconSize = 18,
    rightIconSize = 18,
  }: ListViewProps) => {
    const { styles, colors } = useListItemStyle({});

    const renderLeftIcon = useCallback(() => {
      return (
        leftIcon && (
          <SvgButton
            icon={leftIcon}
            size={leftIconSize}
            style={[styles.leftContainer, leftContainer]}
            onPress={onLeftIconPress ? onLeftIconPress : onPress}
            iconColor={leftIconColor ? leftIconColor : colors?.gray}
          />
        )
      );
    }, [
      colors,
      styles,
      onPress,
      leftIcon,
      leftIconSize,
      leftContainer,
      leftIconColor,
      onLeftIconPress,
    ]);

    const renderRightIcon = useCallback(() => {
      return (
        rightIcon && (
          <SvgButton
            icon={rightIcon}
            size={rightIconSize}
            style={[styles.rightContainer, rightContainer]}
            onPress={onRightIconPress ? onRightIconPress : onPress}
            iconColor={rightIconColor ? rightIconColor : colors.gray}
          />
        )
      );
    }, [
      styles,
      colors,
      onPress,
      rightIcon,
      rightIconSize,
      rightContainer,
      rightIconColor,
      onRightIconPress,
    ]);

    const renderTextContainer = useCallback(
      () => (
        <View style={[styles.viewContainer, titleContainer]}>
          {typeof title === 'string' && title ? (
            <AppText
              numberOfLines={numberOfLines || undefined}
              style={[styles.title, titleStyle]}>
              {title}
            </AppText>
          ) : (
            title
          )}
          {typeof subTitle === 'string' && subTitle ? (
            <AppText
              numberOfLines={numberOfLines || undefined}
              style={[styles.subTitle, subTitleStyle]}>
              {subTitle}
            </AppText>
          ) : (
            subTitle
          )}
        </View>
      ),
      [
        title,
        styles,
        subTitle,
        titleStyle,
        numberOfLines,
        subTitleStyle,
        titleContainer,
      ],
    );

    return (
      <View>
        <Pressable
          style={[styles.listContainer, listContainer]}
          onPress={onPress}>
          {renderLeftIcon()}
          {renderTextContainer()}
          {renderRightIcon()}
        </Pressable>
        {isSeprator && <Divider />}
      </View>
    );
  },
);

export default ListView;
