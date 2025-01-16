import { useMemo } from 'react';
import { useTheme } from '../../hooks';
import { StyleSheet } from 'react-native';

export const useImageContainerStyle = () => {
  const { colors } = useTheme();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        overflow: 'hidden',
        position: 'relative',
      },
      image: {
        width: '100%',
        height: '100%',
        borderRadius: 6,
      },
      loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -15,
        marginTop: -15,
      },
      installer: {
        right: 0,
        bottom: 2,
        position: 'absolute',
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
    });
  }, []);

  return { styles, colors };
};
