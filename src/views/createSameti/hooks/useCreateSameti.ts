import { useForm } from 'react-hook-form';
import { createSametiSchema } from '../../../helpers/yupHelper';

const useCreateSameti = () => {
      const { handleSubmit, control } = useForm<any, any>({
        resolver: createSametiSchema,
        mode: 'onBlur',
      });

      return {
        control,
        handleSubmit,
      };
};

export default useCreateSameti;

