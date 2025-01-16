import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useCallback, useImperativeHandle, useState } from 'react';
import { DEFAULT_COLORS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../styles';

export const LoadingIndicator = (
  props: any,
  ref: React.Ref<unknown> | undefined,
) => {
  const styles = stylesheet();
  const [showLoader, setShowLoader] = useState(false);
  useImperativeHandle(ref, () => ({
    showAppLoader: showAppLoader,
    hideAppLoader: hideAppLoader,
  }));

  const showAppLoader = useCallback(() => {
    setShowLoader(true);
  }, []);

  const hideAppLoader = useCallback(() => {
    setShowLoader(false);
  }, []);

  return showLoader ? (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={DEFAULT_COLORS.white} />
    </View>
  ) : (
    <></>
  );
};

export default React.forwardRef(LoadingIndicator);

const stylesheet = () =>
  StyleSheet.create({
    container: {
      width: SCREEN_WIDTH,
      alignItems: 'center',
      position: 'absolute',
      height: SCREEN_HEIGHT,
      justifyContent: 'center',
      backgroundColor: DEFAULT_COLORS.blackOpacity,
    },
  });
