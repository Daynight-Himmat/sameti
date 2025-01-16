import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useKeyboardScrollView = () => {
  const { colors } = useTheme();
  const { wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: colors.white,
        paddingHorizontal: wp(SPACING.s16),
      },
    });
  }, [colors, wp]);

  return styles;
};
