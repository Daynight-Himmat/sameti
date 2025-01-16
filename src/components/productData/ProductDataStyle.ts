import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useProductDetailStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      productName: {
        fontSize: 12,
        height: 20,
        color: colors.darkGray,
      },
      productCode: {
        fontSize: 12,
        color: colors.darkGrayishBlue,
        paddingVertical: hp(SPACING.s6),
      },
      products: {
        flex: 1,
        paddingVertical: hp(SPACING.s10),
        paddingHorizontal: wp(SPACING.s10),
      },
      rate: {
        flexDirection: 'row',
        paddingVertical: hp(SPACING.s4),
      },
      rateText: {
        color: colors.darkGray,
        paddingHorizontal: wp(SPACING.s6),
      },
      availableStock: {
        textAlign: 'center',
        color: colors.red,
      },
      stockContainer: {
        width: '100%',
        paddingVertical: hp(SPACING.s6),
        marginVertical: hp(SPACING.s6),
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
