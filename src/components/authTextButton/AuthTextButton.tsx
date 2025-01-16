import React from 'react';
import AppText from '../text/AppText';
import { Pressable } from 'react-native';
import { useAuthTextButtonStyle } from './AuthTextButtonStyle';

interface props {
  message?: string;
  onPressText?: string;
  onPress?: () => void;
}

const AuthTextButton = React.memo(
  ({ onPress, onPressText, message }: props) => {
    const { styles } = useAuthTextButtonStyle();

    return (
      <Pressable style={styles.signUpContainer} onPress={onPress}>
        <AppText style={styles.signUp}>
          {message}
          <AppText fontFamily={'medium'} style={styles.signUpText}>
            {onPressText}
          </AppText>
        </AppText>
      </Pressable>
    );
  },
);

export default AuthTextButton;
