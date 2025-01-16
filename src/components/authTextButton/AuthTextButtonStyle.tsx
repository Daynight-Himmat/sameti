import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useAuthTextButtonStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      signUpContainer: {
        marginTop: hp(30),
        alignItems: 'center',
      },
      signUp: {
        textAlign: 'center',
        color: colors.gray,
      },
      signUpText: {
        color: colors.green,
      },
    });
  }, [colors, hp]);

  return { styles, colors };
};
