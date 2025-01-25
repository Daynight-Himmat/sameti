import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { CheckBoxSide } from '../../interfaces/commonInterface';

interface props {
  size?: number;
  isSelect?: boolean;
  checkBoxSide: CheckBoxSide;
  type?: 'check' | 'radio' | 'address' | 'none' | undefined;
}

export const useCheckBoxStyle = ({ size, isSelect, checkBoxSide }: props) => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      list: {
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        marginTop: hp(SPACING.s8),
        paddingBottom: hp(SPACING.s6),
        borderBottomColor: colors.grayishBlue,
      },
      itemContainer: {
        width: checkBoxSide === 'Left' ? 'auto' : '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      itemText: {
        color: colors.gray,
        paddingLeft: ( checkBoxSide === 'Left' ? SPACING.s10 : SPACING.none),
        paddingRight: ( checkBoxSide === 'Right' ? SPACING.s10 : SPACING.none),
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
  }, [checkBoxSide, colors, hp, isSelect, size]);

  return { styles, colors };
};
