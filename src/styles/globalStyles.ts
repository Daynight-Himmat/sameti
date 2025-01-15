import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../hooks';
import { useMemo } from 'react';
import { FONTS, SHADOW } from '../styles';

export const useGlobalStyle = () => {
  const { colors } = useTheme();
  const inset = useSafeAreaInsets();
  const styles = useMemo(() => {
    return {
      flex: {
        flex: 1,
      },
      headerGlobalStyle: {
        headerStyle: {
          backgroundColor: colors.whiteToDark,
          height: 56 + inset.top,
          ...SHADOW.shadow2,
        },
        headerTitleAlign: 'left',
        headerTintColor: colors.primaryToWhite,
        headerTitleStyle: {
          fontFamily: FONTS.primary.semiBold,
          fontSize: 18,
        },
        headerBackTitleVisible: false,
        headerShadowVisible: true,
      },
      fullHeightWidth: {
        width: '100%',
        height: '100%',
      },
      flexRow: {
        flexDirection: 'row',
      },
      alignCenter: {
        alignItems: 'center',
      },
    };
  }, [colors]);

  return styles;
};
