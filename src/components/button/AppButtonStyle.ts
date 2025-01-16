import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FONTS, SPACING } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';

interface props {
  borderRadius?: number;
  backgroundColor?: string | undefined;
}

export const useAppButtonStyle = ({ backgroundColor, borderRadius }: props) => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      button: {
        width: wp(200),
        borderRadius: 6,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: wp(SPACING.s12),
        backgroundColor: backgroundColor || colors.primary,
      },
      label: {
        fontSize: 16,
        color: colors.white,
      },
      buttonStyle: {
        height: 48,
        width: '100%',
        fontSize: 16,
        fontFamily: FONTS.medium,
        backgroundColor: colors.green,
        borderRadius: borderRadius || 6,
      },
      buttonContainer: {
        paddingVertical: hp(SPACING.s16),
        marginHorizontal: wp(SPACING.s16),
      },
      buttonText: {
        fontFamily: FONTS.medium,
      },
      iconSpace: {
        paddingRight: hp(SPACING.s6),
      },
      cartButton: {
        width: '100%',
        height: 35,
        maxHeight: 40,
        backgroundColor: colors?.green,
        marginVertical: hp(SPACING.s6),
        paddingVertical: hp(SPACING.s6),
      },
      cartContainer: {
        paddingHorizontal: wp(SPACING.s6),
      },
      cartButtonLabel: {
        fontSize: 14,
        fontFamily: FONTS.medium,
      },
    });
  }, [wp, backgroundColor, colors, borderRadius, hp]);

  return { styles, colors };
};
