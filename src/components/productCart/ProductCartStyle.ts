import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SPACING } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useProductCartStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      labelText: {
        color: colors.gray,
      },
      returnedProduct: {
        color: colors?.red,
      },
      renderRadioItem: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: hp(SPACING.s10),
        paddingHorizontal: wp(SPACING.s16),
      },
    });
  }, [colors, wp, hp]);

  return {
    styles,
    SCREEN_WIDTH,
  };
};
