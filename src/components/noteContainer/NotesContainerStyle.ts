import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useNoteContainerStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      renderHeader: {
        borderRadius: 6,
        marginVertical: hp(SPACING.s8),
        paddingVertical: hp(SPACING.s8),
        paddingHorizontal: wp(SPACING.s16),
        backgroundColor: colors.lightGrayishLimeGreen,
      },
      headerText: {
        fontSize: 12,
        color: colors.veryDarkLimeGreen,
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
