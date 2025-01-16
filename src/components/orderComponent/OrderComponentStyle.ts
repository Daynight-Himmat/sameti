import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FONTS, SPACING } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useOrderComponentStyle = () => {
  const { colors } = useTheme();
  const { wp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      valueText: {
        fontSize: 12,
        color: colors.gray,
      },
      keyText: {
        fontSize: 12,
        color: colors.gray,
        fontFamily: FONTS.medium,
      },
      detailContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: wp(SPACING.s6),
      },
    });
  }, [colors, wp]);

  return {
    styles,
    colors,
  };
};
