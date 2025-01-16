import { useMemo } from 'react';
import { useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';

export const useSvgButtonStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      favIcon: {
        width: 50,
        right: 25,
        height: 50,
        bottom: 25,
        borderRadius: 6,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green,
      },
    });
  }, [colors]);

  return {
    styles,
    colors,
  };
};
