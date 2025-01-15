import {StyleSheet} from 'react-native';
import {useMemo} from 'react';

export const useLoginStyle = () => {
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: 60,
        marginTop: 54,
      },
    });
  }, []);

  return styles;
};
