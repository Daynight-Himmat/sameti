import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';

export const useBadgeStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      counterContainer: {
        top: -8,
        right: -8,
        width: 15,
        height: 15,
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'center',
        borderColor: colors.white,
        backgroundColor: colors.red,
      },
      conunter: {
        fontSize: 9,
        color: colors.white,
        alignItems: 'center',
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
