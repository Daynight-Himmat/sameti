import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useSearchBoxStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      searchContainer: {
        paddingTop: hp(SPACING.s10),
        paddingHorizontal: hp(SPACING.s16),
      },
      searchInput: {
        borderRadius: 4,
        backgroundColor: colors.veryLightGray,
      },
      textStyle: {
        color: colors.gray,
      },
    });
  }, [colors, hp]);

  return { styles, colors };
};
