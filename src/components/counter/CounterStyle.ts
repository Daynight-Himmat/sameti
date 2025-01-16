import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FONTS, SHADOW, SPACING } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useCounterStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      counterContainer: {
        width: 80,
        height: 25,
        borderRadius: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.grayishBlue,
      },
      counterText: {
        height: 25,
        color: colors.gray,
        textAlign: 'center',
        fontFamily: FONTS.semiBold,
        paddingLeft: hp(SPACING.none),
        paddingRight: hp(SPACING.none),
      },
      counterStyle: {
        width: 40,
        ...SHADOW.noShadow,
        backgroundColor: colors?.grayishBlue,
      },
      counterButton: {
        width: '32%',
        height: '100%',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
      },
    });
  }, [colors, hp]);

  return {
    styles,
    colors,
  };
};
