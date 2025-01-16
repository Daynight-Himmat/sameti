import { useMemo } from 'react';
import { useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';

export const useEmptyViewStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      noDataText: {
        color: colors.gray,
      },
      noDataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
      },
    });
  }, [colors]);

  return styles;
};
