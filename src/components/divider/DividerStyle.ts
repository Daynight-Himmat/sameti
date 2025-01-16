import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useDividerStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        height: 1,
        marginVertical: hp(SPACING.s6),
      },
    });
  }, [hp]);

  return {
    styles,
    colors,
  };
};
