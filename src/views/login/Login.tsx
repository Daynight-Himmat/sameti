import Svg from '../../assets/svg';
import useLogin from './hooks/useLogIn';
import React, { useCallback } from 'react';
import { useLoginStyle } from './LoginStyle';
import AppText from '../../components/text/AppText';
import AppButton from '../../components/button/AppButton';
import { Pressable, View, SafeAreaView } from 'react-native';
import WelcomeLabel from '../../components/welcomLabel/WelComelabel';
import { LOG_IN, PLACEHOLDER } from '../../constants/stringConstants';
import AuthTextButton from '../../components/authTextButton/AuthTextButton';
import AppTextControlInput from '../../components/textInput/AppTextInputController';
import KeyboardScrollView from '../../components/keyboardScrollView/KeyboardScrollView';

const Login = () => {
  const { styles } = useLoginStyle();
  const {
    control,
    onBackPress,
    onLogInPress,
    onForgotPress,
    onSignUpPress,
    handleSubmit,
  } = useLogin();

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
            label={LOG_IN.label}
            onPress={onBackPress}
            message={LOG_IN.message}
            labelStyle={styles.label}
          />

          {renderInput('emailIcon', 'email', PLACEHOLDER.email)}
          {renderInput('lockIcon', 'password', PLACEHOLDER.password)}

          <Pressable
            hitSlop={10}
            onPress={onForgotPress}
            style={styles.forgetPass}>
            <AppText fontFamily={'medium'} style={styles.forgetPassText}>
              {LOG_IN.forgotPass}
            </AppText>
          </Pressable>
          <AppButton
            title="Login"
            onPress={handleSubmit(onLogInPress)}
            style={styles.button}
          />
          <AuthTextButton
            onPress={onSignUpPress}
            onPressText={LOG_IN.signUp}
            message={LOG_IN.createAccount}
          />
        </KeyboardScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Login;
