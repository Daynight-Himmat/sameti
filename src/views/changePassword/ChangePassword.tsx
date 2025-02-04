import React,{ useCallback } from 'react';
import { View, SafeAreaView } from 'react-native';
import useChangePassword from './hooks/useChangePassword';
import AppButton from '../../components/button/AppButton';
import { useChangePasswordStyle } from './ChangePasswordStyle';
import WelcomeLabel from '../../components/welcomLabel/WelComelabel';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppTextControlInput from '../../controller/TextInputController/TextInputController';
import { CHANGE_PASSWORD, PLACEHOLDER, RESET_PASSWORD } from '../../constants/stringConstants';

const ChangePassword = () => {
  const { styles } = useChangePasswordStyle();
  const { params, control, handleSubmit } = useChangePassword();

  const renderItem = useCallback((controllerName: string, label: string, placeholder: string) => {
    return (
      <AppTextControlInput
        label={label}
        type={'password'}
        control={control}
        placeholder={placeholder}
        controllerName={controllerName}
      />
    );
  }, [control]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <KeyboardAwareScrollView style={styles.subContainer}>
          <WelcomeLabel
            isAppLogo={true}
            isBackPress={true}
            label={params?.comeFrom === 'changePassword' ? CHANGE_PASSWORD.label : RESET_PASSWORD.label}
            message={params?.comeFrom === 'changePassword' ? CHANGE_PASSWORD.message : RESET_PASSWORD.message}
          />
          {params?.comeFrom === 'changePassword' && renderItem('currentPassword', 'Current Password', PLACEHOLDER.currentPassword)}
          {renderItem('password', 'New Password', PLACEHOLDER.password)}
          {renderItem('confirmPassword', 'Confirm Password', PLACEHOLDER.confirm)}
          
        </KeyboardAwareScrollView>
        <View style={styles.buttonContainer}>
            <AppButton
              title={params?.comeFrom === 'changePassword' ? 'Update Password' : 'Reset Password'}
              style={styles.buttonStyle}
              labelStyle={styles.buttonText}
              onPress={handleSubmit(() => {})}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
