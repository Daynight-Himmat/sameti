import { Controller, useForm } from 'react-hook-form';
import { RootStackParamList } from '../../../constants/routeConstant';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { forgotPassSchema } from '../../../helpers/yupHelper';

const useForgotPass = () => {
  const { handleSubmit, control } = useForm<any, any>({
    resolver: forgotPassSchema,
    mode: 'onBlur',
  });

  const navigation =
    useNavigation<NavigationProp<RootStackParamList, 'forgot'>>();

  const onForgotPress = () => navigation.goBack();

  return {
    control,
    Controller,
    handleSubmit,
    onForgotPress,
  };
};

export default useForgotPass;

