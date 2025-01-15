import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {DEFAULT_COLORS} from '../../styles';

type Props = {
  color?: string;
};

const LoadingIndicator: React.FC<Props> = ({color = DEFAULT_COLORS.white}) => {
  const styles = stylesheet();

  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={color} />
    </View>
  );
};

export default LoadingIndicator;

const stylesheet = () =>
  StyleSheet.create({
    container: {
      height: 70,
      width: 70,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 35,
    },
    imgStyle: {
      width: 28,
      height: 28,
      position: 'absolute',
      alignSelf: 'center',
    },
  });
