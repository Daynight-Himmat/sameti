import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SPACING } from '../../styles';

export const useHomeStyle = () => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors?.backgroundColor,
      },
      mainContainer:{
        paddingHorizontal: wp(SPACING.s16),
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.s16,
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundColor,
      },
      headerText: {
        color: colors.darkGray,
        fontSize: 22,        
      },
      toggleButton: {
        height: 60,
        padding: 2,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: colors.lightBlue,
      },
       toggleSwitch: {
        height: 56,
        width: '50%',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkGray,
      },
      toggleText: {
        fontSize: 18,
        color: colors.white,
      }
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
