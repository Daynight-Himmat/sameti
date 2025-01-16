import React from 'react';
import Svg from '../../assets/svg';
import AppBottomData from './AppBottomSheet';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { useAppButtonSheetStyle } from './AppBottomSheetStyle';
import { ListTypes } from '../../interfaces/listTypes/listType';
import { Controller, Control, FieldValues } from 'react-hook-form';

interface Props {
  label?: string;
  type?: ListTypes;
  editable?: boolean;
  onPress?: () => void;
  placeholder?: string;
  textStyle?: TextStyle;
  controllerName: string;
  isShowButton?: boolean;
  onIconPress?: () => void;
  containerStyle?: ViewStyle;
  labelStyle?: StyleProp<TextStyle>;
  onSubmitPress?: (item?: any) => void;
  control: Control<FieldValues> | undefined;
  icon: keyof typeof Svg | React.JSX.Element;
  leftIcon?: keyof typeof Svg | React.JSX.Element;
  rightIcon?: keyof typeof Svg | React.JSX.Element;
}

const AppBottomDataController = React.memo(
  ({
    icon,
    type,
    label,
    control,
    rightIcon,
    labelStyle,
    placeholder,
    isShowButton,
    onSubmitPress,
    controllerName,
    containerStyle,
  }: Props) => {
    const { styles } = useAppButtonSheetStyle({});

    return (
      <Controller
        control={control}
        name={controllerName}
        render={({ fieldState: { error }, field: { onChange, value } }) => (
          <AppBottomData
            type={type}
            icon={icon}
            label={label}
            value={value}
            onChange={onChange}
            rightIcon={rightIcon}
            error={error?.message}
            placeholder={placeholder}
            onSubmitPress={onSubmitPress}
            labelStyle={[styles.labelText, labelStyle]}
            style={[styles.inputControlContainer, containerStyle]}
            isShowButton={type === 'address' ? false : isShowButton}
          />
        )}
      />
    );
  },
);

export default AppBottomDataController;
