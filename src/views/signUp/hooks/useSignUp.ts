import {
    useRoute,
    RouteProp,
    useNavigation,
    CommonActions,
    NavigationProp,
  } from '@react-navigation/native';
  import { Controller, useForm } from 'react-hook-form';
  import { signUpSchema } from '../../../helpers/yupHelper';
  import { RootStackParamList } from '../../../constants/routeConstant';

  const useSignUp = () => {
    const { params } = useRoute<RouteProp<RootStackParamList, 'login'>>();
    const navigation =
      useNavigation<NavigationProp<RootStackParamList, 'login'>>();
    const { handleSubmit, control } = useForm<any, any>({
      resolver: signUpSchema,
      mode: 'onBlur',
    });

    const onForgotPress = () => navigation.navigate('forgot');
    const onSignUpPress = () =>
      navigation.navigate('login', { comeFrom: 'signUp'  });
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
