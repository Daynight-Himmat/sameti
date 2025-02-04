import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import { useResponsiveScreen, useTheme} from '../../hooks';
import { SPACING } from '../../styles';

export const useChangePasswordStyle = () => {
  const {colors} = useTheme();
  const {hp, wp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.white,
      },
      subContainer: {
        flex: 1,
        paddingHorizontal: wp(16),
      },
      welcomeContainer: {
        marginTop: 0,
        marginBottom: 10,
      },
      inputContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        borderColor: colors.grayishBlue,
      },
      labelText: {
        color: colors.darkGrayishBlue,
      },
      inputText: {
        fontWeight: '500',
        color: colors.darkGrayishBlue,
      },
      buttonText: {
        fontWeight: 'bold',
      },
      buttonContainer: {
        paddingHorizontal: wp(16),
        marginVertical:hp(16),
      },
      buttonStyle: {
        height: 48,
        width: '100%',
        marginTop: hp(SPACING.s22),
        backgroundColor: colors.darkGray,
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
