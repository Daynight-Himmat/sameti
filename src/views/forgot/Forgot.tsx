import React from 'react';
import { useForgotStyle } from './ForgotStyle';
import { View, SafeAreaView } from 'react-native';
import useForgotPass from './hooks/useForgotPass';
import AppButton from '../../components/button/AppButton';
import WelcomeLabel from '../../components/welcomLabel/WelComelabel';
import { FORGOT_PASSWORD, PLACEHOLDER } from '../../constants/stringConstants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppTextControlInput from '../../components/textInput/AppTextInputController';

const ForgotPassword = () => {
  const { styles } = useForgotStyle();
  const { control, onForgotPress, handleSubmit } = useForgotPass();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <KeyboardAwareScrollView
          style={styles.subContainer}
          showsVerticalScrollIndicator={false}>
          <WelcomeLabel
            isAppLogo={true}
            label={FORGOT_PASSWORD.label}
            message={FORGOT_PASSWORD.message}
          />
          <AppTextControlInput
            control={control}
            leftIcon={'phoneIcon'}
            controllerName={'phone'}
            keyboardType={'number-pad'}
            placeholder={PLACEHOLDER.email}
          />
          <AppButton
            title="Submit"
            style={styles.button}
            onPress={handleSubmit(() => onForgotPress())}
          />
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ForgotPassword;
