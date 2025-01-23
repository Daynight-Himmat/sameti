import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useErrorMessageStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
        error: {
            textAlign: 'left',
            paddingTop: hp(SPACING.s4),
            alignSelf: 'flex-start',
            color: colors.toastError,
          },
    });
  }, [colors, hp]);

  return {
    styles,
  };
};
