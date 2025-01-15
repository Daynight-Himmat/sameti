import React from 'react';
import {View} from 'react-native';
import AppButton from '../../components/button/AppButton';
import AppTextInput from '../../components/textInput/AppTextInput';
import {loginFormSchema} from '../../helpers/yupHelper';
import {Controller, useForm} from 'react-hook-form';
import {useLoginStyle} from './LoginStyle';

const Login = () => {
  const styles = useLoginStyle();
  const {handleSubmit, control, getValues, reset, setValue, clearErrors} =
    useForm<any, any>({
      resolver: loginFormSchema,
      mode: 'onBlur',
      defaultValues: {
        email: '',
        password: '',
      },
    });

  const onLogin = () => {
    const {email, password} = getValues();
    if (!email || !password) {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <AppTextInput
            style={{paddingVertical: 8}}
            value={value}
            placeholder="Enter Email"
            onChangeText={onChange}
            onBlur={onBlur}
            error={error?.message}
            autoCorrect={false}
            textContentType="username"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
          <AppTextInput
            style={{paddingVertical: 8, marginTop: 22}}
            value={value.trim()}
            placeholder="Enter Password"
            type={'password'}
            onChangeText={onChange}
            onBlur={onBlur}
            error={error?.message}
            autoCorrect={false}
            textContentType="password"
          />
        )}
      />
      <AppButton
        style={{backgroundColor: 'red', alignSelf: 'center', marginTop: 32}}
        title="Press Me"
        onPress={handleSubmit(onLogin)}
        labelStyle={{}}
      />
    </View>
  );
};
export default Login;
