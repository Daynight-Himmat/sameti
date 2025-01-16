import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SPACING } from '../../styles';

export const useSplashStyle = () => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(SPACING.s10),
        paddingHorizontal: wp(SPACING.s16),
      },
      iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      appName: {
        fontSize: 28,
        color: colors.black,
        paddingVertical: hp(SPACING.s10),
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
