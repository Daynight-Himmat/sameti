import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { SCREEN_WIDTH, SPACING } from '../../../styles';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { useKeyboard } from '../../../hooks/useKeyboard';

export const useConfirmationStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const { keyboardHeight } = useKeyboard();
  const styles = useMemo(() => {
    return StyleSheet.create({
      modalView: {
        alignItems: 'center',
        borderRadius: 26,
        paddingHorizontal: wp(22),
        width: SCREEN_WIDTH - wp(44),
        backgroundColor: colors.white,
        paddingVertical: hp(SPACING.s16),
        marginBottom: keyboardHeight / 2,
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      bodyText: {
        fontSize: hp(24),
        color: colors?.red,
        textAlign: 'center',
      },
      bodySubTitle: {
        lineHeight: 18,
        textAlign: 'center',
        color: colors?.gray,
        marginTop: hp(SPACING.s16),
        fontSize: hp(SPACING.s16),
      },
    });
  }, [colors, wp, hp, keyboardHeight]);

  return { styles };
};
