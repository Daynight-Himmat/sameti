import { Controller, useForm } from 'react-hook-form';
import { RootStackParamList } from '../../../constants/routeConstant';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { changePasswordFormSchema, resetPasswordFormSchema } from '../../../helpers/yupHelper';

const useChangePassword = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'changePassword'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { handleSubmit, control } = useForm<any, any>({
    resolver: params?.comeFrom === 'changePassword' ? changePasswordFormSchema : resetPasswordFormSchema,
    mode: 'onBlur',
  });

  const onUpdatePassword = () => {

  };

  return {
    params,
    control,
    Controller,
    navigation,
    handleSubmit,
    onUpdatePassword,
  };
};

export default useChangePassword;
