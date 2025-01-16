import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { FONTS, SCREEN_WIDTH, SPACING } from '../../../styles';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useOrderActionsStyle = () => {
  const { colors } = useTheme();
  const inset = useSafeAreaInsets();
  const { keyboardHeight } = useKeyboard();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: SCREEN_WIDTH,
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: wp(28),
        backgroundColor: colors.white,
        paddingVertical: hp(SPACING.s16),
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      heading: {
        fontSize: 18,
      },
      itemText: {
        fontSize: 14,
        fontFamily: FONTS.medium,
      },
      topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: hp(SPACING.s10),
        justifyContent: 'space-between',
      },
      flatList: {
        paddingBottom: hp(inset.bottom),
        paddingVertical: hp(SPACING.s10),
      },
    });
  }, [colors.white, hp, inset, keyboardHeight, wp]);

  return { styles, colors };
};
