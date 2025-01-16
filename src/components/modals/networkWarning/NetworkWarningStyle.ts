import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FONTS, SCREEN_WIDTH } from '../../../styles';
import { useResponsiveScreen, useTheme } from '../../../hooks';

export const NetworkWarningStyle = () => {
  const { wp } = useResponsiveScreen();
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      modalView: {
        margin: 0,
        padding: 20,
        borderRadius: 10,
        width: SCREEN_WIDTH - 64,
        backgroundColor: 'white',
      },
      headerBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        width: '100%',
      },
      headerText: {
        fontSize: 20,
        letterSpacing: 0.5,
        color: colors.green,
        fontFamily: FONTS.semiBold,
        textTransform: 'capitalize',
      },
      bodyBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
      },
      bodyText: {
        fontSize: 18,
        textAlign: 'center',
        color: colors.gray,
        letterSpacing: 0.5,
      },
      footerBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        height: 42,
        width: wp(200),
        borderRadius: 42,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors?.green,
      },
      buttonLabel: {
        letterSpacing: 0.5,
        color: colors.white,
        fontFamily: FONTS.semiBold,
      },
    });
  }, [wp, colors]);

  return styles;
};
