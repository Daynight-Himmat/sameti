import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useTextInputControllerStyle } from './TextInputControllerStyle';
import { Controller, Control, FieldValues } from 'react-hook-form';
import AppTextInput, { AppTextProps } from '../../components/textInput/AppTextInput';

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
    const { styles } = useTextInputControllerStyle();

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
