import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SPACING } from '../../styles';

export const useAuthTextButtonStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      signUpContainer: {
        marginTop: hp(SPACING.s16),
        alignItems: 'center',
        marginBottom: hp(SPACING.s20),
      },
      signUp: {
        textAlign: 'center',
        color: colors.gray,
      },
      signUpText: {
        color: colors.darkGray,
      },
    });
  }, [colors, hp]);

  return { styles, colors };
};
