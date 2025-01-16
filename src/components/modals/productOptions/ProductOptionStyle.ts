import { useMemo } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SPACING } from '../../../styles';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useResponsiveScreen, useTheme } from '../../../hooks';

export const useProductOptionsStyle = () => {
  const { keyboardHeight } = useKeyboard();
  const { wp, hp } = useResponsiveScreen();
  const { colors } = useTheme();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        height: 'auto',
        width: SCREEN_WIDTH,
        paddingBottom: hp(26),
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingHorizontal: wp(28),
        paddingTop: hp(SPACING.s16),
        backgroundColor: colors.white,
        marginBottom: Platform.OS === 'ios' ? keyboardHeight : 0,
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      vatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      itemContainer: {
        marginTop: hp(SPACING.s1),
      },
      iconContainer: {
        height: 4,
        width: 64,
        alignSelf: 'center',
        marginTop: hp(SPACING.s12),
        backgroundColor: colors.gray,
      },
      subCategory: {
        justifyContent: 'flex-start',
        marginLeft: 24 + wp(SPACING.s12),
      },
      checkBox: {
        height: 18,
        width: 18,
        borderRadius: 2,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.green,
      },
      title: {
        fontSize: 14,
      },
    });
  }, [colors, hp, keyboardHeight, wp]);

  return { styles, colors };
};
