import { StyleSheet } from 'react-native';
import { useMemo } from 'react';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SPACING } from '../../styles';

export const useForgotStyle = () => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer: {
        flex: 1,
      },
      subContainer: {
        flex: 1,
        paddingHorizontal: wp(SPACING.s16),
      },
      button: {
        height: 48,
        width: '100%',
        marginTop: hp(SPACING.s22),
        backgroundColor: colors.darkGray,
      },
       buttonContainer: {
        paddingHorizontal: wp(16),
        marginVertical:hp(16),
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
