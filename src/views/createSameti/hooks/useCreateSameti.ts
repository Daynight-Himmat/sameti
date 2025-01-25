import { useForm } from 'react-hook-form';
import { createSametiSchema } from '../../../helpers/yupHelper';

const useCreateSameti = () => {
  const { handleSubmit, control, watch, getValues } = useForm<any, any>({
    resolver: createSametiSchema,
    mode: 'all',
    defaultValues: {
      isFixDuration: false
    }
  });

  const label = (controllerName:string, type: string) => {
    return watch?.(controllerName) === 2 ? `Enter ${type} penalty rate (%)` : `Enter ${type} penlty (\u20B9)`;
  }

  return {
    label,
    watch,
    control,
    getValues,
    handleSubmit,
  };
};

export default useCreateSameti;

