import {
    useRoute,
    RouteProp,
    useNavigation,
    CommonActions,
    NavigationProp,
  } from '@react-navigation/native';
  import { Controller, useForm } from 'react-hook-form';
  import { loginFormSchema } from '../../../helpers/yupHelper';
  import { RootStackParamList } from '../../../constants/routeConstant';

  const useSignUp = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, 'login'>>();
    const navigation =
      useNavigation<NavigationProp<RootStackParamList, 'login'>>();
    const { handleSubmit, control } = useForm<any, any>({
      resolver: loginFormSchema,
      mode: 'onBlur',
    });

    const onForgotPress = () => navigation.navigate('forgot');
    const onSignUpPress = () =>
      navigation.navigate('signUp', { comeFrom: 'login' });
    const onLogInPress = () => navigation.navigate('forgot');

    const onBackPress = () => {
      if (params?.comeFrom === 'profile') {
        navigation.dispatch(
          CommonActions.reset({
            routes: [
              {
                name: 'dashboard',
                params: {
                  comefrom: 'LogIn',
                },
              },
            ],
          }),
        );
      } else {
        navigation?.goBack();
      }
    };

    return {
      control,
      Controller,
      onBackPress,
      handleSubmit,
      onLogInPress,
      onForgotPress,
      onSignUpPress,
    };
  };

  export default useSignUp;
