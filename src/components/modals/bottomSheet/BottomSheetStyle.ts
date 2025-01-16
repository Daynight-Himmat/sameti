import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREEN_HEIGHT, SCREEN_WIDTH, SPACING } from '../../../styles';

export const useBottomSheetStyle = () => {
  const { keyboardHeight } = useKeyboard();
  const { wp, hp } = useResponsiveScreen();
  const { colors } = useTheme();
  const inset = useSafeAreaInsets();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: SCREEN_WIDTH,
        paddingVertical: hp(SPACING.s16),
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        height: SCREEN_HEIGHT / 2,
        paddingHorizontal: wp(28),
        backgroundColor: colors.white,
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      inputContainer: {
        marginTop: hp(SPACING.s10),
      },
      input: {
        height: hp(50),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.grayishBlue,
      },
      inputText: {
        color: colors.black,
      },
      flatList: {
        paddingBottom: wp(SPACING.s40),
      },
      button: {
        justifyContent: 'flex-start',
      },
      footer: {
        paddingVertical: hp(SPACING.s10),
        paddingBottom: hp(inset.bottom),
      },
      addressText: {
        fontSize: 14,
        color: colors?.gray,
      },
    });
  }, [colors, hp, inset, keyboardHeight, wp]);

  return { styles, colors };
};
