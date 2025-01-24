import React from 'react';
import CheckBox from '../../components/checkBox/CheckBox';
import {Controller, Control, FieldValues} from 'react-hook-form';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

interface Props {
  label: string;
  controllerName: string;
  control: Control<FieldValues> | undefined;
}

const CheckBoxController = React.memo(
  ({control, label, controllerName }: Props) => {

    return (
      <Controller
        control={control}
        name={controllerName}
        render={({fieldState: {error}, field}) => (
          <>
          <CheckBox {...field} labelField={label}/>
            <ErrorMessage error={error?.message} />
          </>
        )}
      />
    );
  },
);

export default CheckBoxController;
