import React from 'react';
import { ListProps } from '../../interfaces/listInterface';
import ListItem from '../../components/listComponents/ListItem';
import {Controller, Control, FieldValues} from 'react-hook-form';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';

interface Props extends ListProps {
  controllerName: string;
  control: Control<FieldValues> | undefined;
}

const CheckBoxController = React.memo(
  ({control, controllerName, ...rest }: Props) => {
    return (
      <Controller
        control={control}
        name={controllerName}
        render={({fieldState: {error}, field}) => (
          <>
            <ListItem {...field} {...rest} />
            <ErrorMessage error={error?.message} />
          </>
        )}
      />
    );
  },
);

export default CheckBoxController;
