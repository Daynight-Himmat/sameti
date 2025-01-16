import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

const useRenderHTMLStyle = () => {
  const { colors } = useTheme();
  const { hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
      },
      imageContainer: {
        marginVertical: hp(10),
      },
      image: {
        width: '60%',
        height: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      imageView: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      p: {
        color: colors.white,
        fontSize: 14,
      },
    });
  }, [colors, hp]);
  return {
    hp,
    styles,
    colors,
  };
};

export default useRenderHTMLStyle;
