import React from 'react';
import Svg from '../../assets/svg';
import AppText from '../text/AppText';
import { useBadgeStyle } from './BadgeStyle';
import { Pressable, View } from 'react-native';
import SvgButton from '../svgButton/SvgButton';

interface Props {
  length?: number;
  iconColor?: string;
  onPress: () => void;
  badgeColor?: string;
  lengthColor?: string;
  icon: keyof typeof Svg;
}

const Badge = ({
  icon,
  length,
  onPress,
  badgeColor,
  lengthColor,
  ...props
}: Props) => {
  const { styles, colors } = useBadgeStyle();
  const hitSlop = 10;
  const pressable = { hitSlop };
  return (
    <View style={styles.headerRight}>
      <View>
        <SvgButton
          icon={icon}
          onPress={onPress}
          pressableProps={pressable}
          {...props}
        />
        {!!length && (
          <Pressable
            style={[
              styles.counterContainer,
              { backgroundColor: badgeColor || colors.red },
            ]}
            onPress={onPress}>
            <AppText
              fontFamily={'semiBold'}
              style={[styles.conunter, { color: lengthColor || colors.white }]}>
              {length.toString()}
            </AppText>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default React.memo(Badge);
