import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useWelComeLabelStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      iconContainer: {
        marginTop: hp(30),
        marginBottom: hp(SPACING.s20),
      },
      icon: {
        alignSelf: 'flex-start',
        marginBottom: hp(SPACING.s10),
      },
      subContainer: {
        flex: 1,
        paddingHorizontal: wp(SPACING.s16),
      },
      logo: {
        alignSelf: 'center',
      },
      welcomeContainer: {
        alignItems: 'flex-start',
        marginVertical: hp(SPACING.s10),
      },
      label: {
        fontSize: 24,
        color: colors.darkGray,
      },
      subLabel: {
        paddingTop: hp(SPACING.s4),
        color: colors.darkGrayishBlue,
      },
      buttonContainer: {
        marginVertical: hp(SPACING.s24),
        paddingHorizontal: wp(SPACING.s16),
      },
    });
  }, [colors, wp, hp]);

  return { styles, colors };
};
