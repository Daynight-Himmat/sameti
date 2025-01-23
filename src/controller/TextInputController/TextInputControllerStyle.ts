import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useTextInputControllerStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      labelText: {
        color: colors.darkGrayishBlue,
      },
      inputControlContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        marginVertical: hp(SPACING.s2),
        borderColor: colors.grayishBlue,
      },
      inputText: {
        color: colors.black,
      },
    });
  }, [hp, colors]);

  return { styles, colors };
};
