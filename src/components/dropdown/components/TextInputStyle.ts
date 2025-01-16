import { useMemo } from 'react';
import { SPACING } from '../../../styles';
import { I18nManager, StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../../hooks';

export const useTextStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        padding: 12,
        borderRadius: 8,
        justifyContent: 'center',
        backgroundColor: colors.white,
      },
      textInput: {
        flex: 1,
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      },
      input: {
        flex: 1,
        fontSize: 16,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
      },
      label: {
        fontSize: 16,
        marginBottom: hp(SPACING.s4),
      },
      row: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      },
      icon: {
        width: 20,
        height: 20,
      },
    });
  }, [colors, hp]);

  return {
    styles,
    colors,
  };
};
