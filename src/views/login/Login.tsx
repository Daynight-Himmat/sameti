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
import KeyboardScrollView from '../../components/keyboardScrollView/KeyboardScrollView';
import AppTextControlInput from '../../controller/TextInputController/TextInputController';

const Login = () => {
  const { styles } = useLoginStyle();
  const {
    control,
    onBackPress,
    onLogInPress,
    onForgotPress,
    onSignUpPress,
  } = useLogin();

  const renderInput = useCallback(
    (icon: keyof typeof Svg, controllerName: string, placeholder: string, label: string) => {
      return (
        <AppTextControlInput
          label={label}
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
            isBackPress={false}
            label={LOG_IN.label}
            onPress={onBackPress}
            message={LOG_IN.message}
            labelStyle={styles.label}
          />

          {renderInput('phoneIcon', 'mobile', PLACEHOLDER.phone, 'Mobile No.')}
          {renderInput('lockIcon', 'password', PLACEHOLDER.password, 'Password')}

          <Pressable
            hitSlop={10}
            onPress={onForgotPress}
            style={styles.forgetPass}>
            <AppText fontFamily={'medium'} style={styles.forgetPassText}>
              {LOG_IN.forgotPass}
            </AppText>
          </Pressable>
        </KeyboardScrollView>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={onLogInPress}
            style={styles.button}
          />
          <AuthTextButton
            onPress={onSignUpPress}
            onPressText={LOG_IN.signUp}
            message={LOG_IN.createAccount}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Login;
