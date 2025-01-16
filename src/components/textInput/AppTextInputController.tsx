import React from 'react';
import { useAppTextInputStyle } from './AppTextInputStyle';
import AppTextInput, { AppTextProps } from './AppTextInput';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface Props extends AppTextProps {
  type?: any;
  textStyle?: TextStyle;
  controllerName: string;
  containerStyle?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
  control: Control<FieldValues> | undefined;
}

const AppTextControlInput = React.memo(
  ({
    control,
    textStyle,
    labelStyle,
    controllerName,
    containerStyle,
    ...rest
  }: Props) => {
    const { styles } = useAppTextInputStyle({});

    return (
      <Controller
        control={control}
        name={controllerName}
        render={({
          fieldState: { error },
          field: { onChange, value, onBlur },
        }) => (
          <AppTextInput
            value={value}
            onBlur={onBlur}
            error={error?.message}
            onChangeText={onChange}
            textStyle={[styles.inputText, textStyle]}
            labelStyle={[styles.labelText, labelStyle]}
            style={[styles.inputControlContainer, containerStyle]}
            {...rest}
          />
        )}
      />
    );
  },
);

export default AppTextControlInput;
