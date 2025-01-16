import Svg from '../../assets/svg';
import useSignUp from './hooks/useSignUp';
import React, { useCallback } from 'react';
import { useSignUpStyle } from './SignUpStyle';
import { View, SafeAreaView } from 'react-native';
import AppButton from '../../components/button/AppButton';
import WelcomeLabel from '../../components/welcomLabel/WelComelabel';
import { PLACEHOLDER, SIGN_UP } from '../../constants/stringConstants';
import AuthTextButton from '../../components/authTextButton/AuthTextButton';
import AppTextControlInput from '../../components/textInput/AppTextInputController';
import KeyboardScrollView from '../../components/keyboardScrollView/KeyboardScrollView';

const SignUp = () => {
  const { styles } = useSignUpStyle();
  const {
    control,
    onBackPress,
    onLogInPress,
    onSignUpPress,
    handleSubmit,
  } = useSignUp();

  const renderInput = useCallback(
    (icon: keyof typeof Svg, controllerName: string, placeholder: string) => {
      return (
        <AppTextControlInput
          leftIcon={icon}
          control={control}
          placeholder={placeholder}
          controllerName={controllerName}
          type={controllerName === 'password' && 'password'}
          keyboardType={
            controllerName === 'email' ? 'email-address' : 'default'
          }
        />
      );
    },
    [control],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <KeyboardScrollView containerStyle={styles.subContainer}>
          <WelcomeLabel
            isAppLogo
            isBackPress={true}
            label={SIGN_UP.label}
            onPress={onBackPress}
            message={SIGN_UP.message}
            labelStyle={styles.label}
          />
          {renderInput('personIcon', 'name', PLACEHOLDER.name)}
          {renderInput('phoneIcon', 'mobile', PLACEHOLDER.email)}
          {renderInput('lockIcon', 'password', PLACEHOLDER.password)}

          <AppButton
            title="SignUp"
            onPress={handleSubmit(onLogInPress)}
            style={styles.button}
          />
          <AuthTextButton
            onPress={onSignUpPress}
            onPressText={SIGN_UP.signIn}
            message={SIGN_UP.haveAccount}
          />
        </KeyboardScrollView>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
