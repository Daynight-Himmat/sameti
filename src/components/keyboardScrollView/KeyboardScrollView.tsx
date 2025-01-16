import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useKeyboardScrollView } from './KeyboardScrollViewStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const KeyboardScrollView = React.memo(
  ({ containerStyle, children, ...rest }: Props) => {
    const styles = useKeyboardScrollView();
    return (
      <KeyboardAwareScrollView
        children={children}
        enableAutomaticScroll={true}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}
        keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
        contentContainerStyle={[styles.container, containerStyle]}
        {...rest}
      />
    );
  },
);

export default KeyboardScrollView;
