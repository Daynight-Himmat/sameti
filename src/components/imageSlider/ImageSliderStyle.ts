import { useMemo } from 'react';
import { useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';

export const useImageSliderStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: colors.white,
      },
      itemContainer: {
        padding: 3,
        height: 240,
        borderRadius: 6,
        marginVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
      },
      image: {
        height: '100%',
      },
      dot: {
        width: 10,
        height: 10,
        marginRight: 6,
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: colors.gray,
      },
      dotContainer: {
        bottom: 18,
        alignSelf: 'center',
        position: 'absolute',
        flexDirection: 'row',
      },
      activeDot: {
        backgroundColor: colors.primary,
      },
    });
  }, [colors]);

  return { styles, colors };
};
