import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks';
import { SCREEN_WIDTH } from '../../../styles';

export const useCalenderStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        padding: 16,
        borderRadius: 16,
        alignSelf: 'center',
        width: SCREEN_WIDTH - 32,
        backgroundColor: colors.white,
      },
    });
  }, [colors]);

  return { styles, colors };
};
