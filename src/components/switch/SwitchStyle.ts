import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useSwitchStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      rightMessage: {
        fontSize: 12,
        color: colors.gray,
        paddingRight: hp(SPACING.s10),
      },
      leftMessage: {
        fontSize: 12,
        color: colors.gray,
        paddingLeft: hp(SPACING.s10),
      },
      switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: wp(SPACING.s10),
      },
      errorText: {
        color: colors.toastError,
      },
    });
  }, [hp, wp, colors]);

  return {
    styles,
    colors,
  };
};
