import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

interface props {
  size?: number;
  isSelect?: boolean;
  type?: 'check' | 'radio' | 'address' | 'none' | undefined;
}

export const useCheckBoxStyle = ({ size, isSelect }: props) => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      list: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: hp(SPACING.s8),
        paddingBottom: hp(SPACING.s6),
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderBottomColor: colors.grayishBlue,
      },
      itemContainer: {
        flexShrink: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp(SPACING.s6),
      },
      itemText: {
        width: '95%',
        fontSize: 18,
        fontWeight: '500',
        color: colors.gray,
        paddingRight: wp(SPACING.s20),
        paddingHorizontal: wp(SPACING.s10),
      },
      titleContainer: {
        width: '100%',
      },
      checkContainer: {
        borderWidth: 2,
        borderRadius: 2,
        width: size || 16,
        height: size || 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.green,
        backgroundColor: isSelect ? colors.green : colors.white,
      },
    });
  }, [colors, hp, isSelect, size, wp]);

  return { styles, colors };
};
