import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../styles';

export const useMisonryListStyle = () => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      scrollView: {
        width: '100%',
      },
      container: {
        padding: 10,
        flexDirection: 'row',
      },
      column: {
        flex: 1,
      },
    });
  }, []);

  return {
    styles,
    SCREEN_WIDTH,
  };
};
