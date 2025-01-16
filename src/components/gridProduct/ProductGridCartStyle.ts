import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { SHADOW } from '../../styles/shadow';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useProductGridCartStyle = () => {
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
      productListContainer: {
        flex: 1,
        alignItems: 'center',
      },
      productGridContainer: {
        flex: 1 / 2,
        alignItems: 'center',
      },
      productListSubContainer: {
        borderRadius: 6,
        ...SHADOW.shadow5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        marginVertical: hp(SPACING.s6),
      },
      productGridSubContainer: {
        width: '95%',
        borderRadius: 6,
        ...SHADOW.shadow5,
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
        marginVertical: hp(SPACING.s6),
      },
      imageListContainer: {
        width: '25%',
        borderRadius: 6,
        margin: SPACING.s10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageGridContainer: {
        height: hp(150),
        borderRadius: 6,
        margin: SPACING.s10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      products: {
        flex: 1,
        paddingVertical: hp(SPACING.s10),
        paddingHorizontal: wp(SPACING.s10),
      },
      discountPrice: {
        fontSize: 12,
        color: colors.gray,
        textDecorationLine: 'line-through',
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
