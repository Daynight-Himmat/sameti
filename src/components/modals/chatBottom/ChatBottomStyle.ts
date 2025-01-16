import { useMemo } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { FONTS, SCREEN_WIDTH, SPACING } from '../../../styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useChatBottomStyle = () => {
  const { colors } = useTheme();
  const inset = useSafeAreaInsets();
  const { keyboardHeight } = useKeyboard();
  const { wp, hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: wp(28),
        backgroundColor: colors.white,
        paddingVertical: hp(SPACING.s16),
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      subContainer: {
        justifyContent: 'center',
      },
      inputContainer: {
        marginVertical: hp(SPACING.s20),
      },
      input: {
        height: hp(50),
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: wp(SPACING.s16),
        borderColor: colors.grayishBlue,
      },
      flatList: {
        paddingBottom: wp(SPACING.s40),
      },
      containerDrop: {
        height: 150,
      },
      button: {
        justifyContent: 'flex-start',
      },
      labelContainer: {
        marginBottom: hp(SPACING.s16),
      },
      label: {
        fontSize: 20,
        color: colors.black,
      },
      footer: {
        paddingVertical: hp(SPACING.s10),
        paddingBottom: hp(inset.bottom),
      },
      labelTextStyle: {
        color: colors.darkGray,
        fontFamily: FONTS.semiBold,
      },
      chatText: {
        height: 'auto',
        minHeight: 48,
        maxHeight: 100,
        color: colors.gray,
      },
    });
  }, [colors, hp, inset, keyboardHeight, wp]);

  return { styles, colors };
};
