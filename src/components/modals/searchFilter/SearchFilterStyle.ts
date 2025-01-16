import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SPACING } from '../../../styles';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useResponsiveScreen, useTheme } from '../../../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const useSearchFilterStyle = () => {
  const { colors } = useTheme();
  const inset = useSafeAreaInsets();
  const { keyboardHeight } = useKeyboard();
  const { hp, wp } = useResponsiveScreen();
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
      },
      topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: hp(SPACING.s10),
        justifyContent: 'space-between',
      },
      footer: {
        paddingBottom: hp(inset.bottom),
        paddingVertical: hp(SPACING.s10),
      },
    });
  }, [wp, colors, hp, keyboardHeight, inset]);
  return {
    styles,
    colors,
  };
};

export default useSearchFilterStyle;
