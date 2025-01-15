import React, {ReactNode, useState} from 'react';
import {
  TextInput,
  View,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
  PressableStateCallbackType,
  TextInputProps,
} from 'react-native';
import SvgIcon from '../../assets/svg';
import {useTheme} from '../../hooks';
import AppText from '../text/AppText';
import {useAppTextInputStyle} from './AppTextInputStyle';

interface props extends TextInputProps {
  error?: string | undefined;
  label?: string;
  required?: boolean;
  icon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  onIconPress?: () => void | undefined;
  textStyle?: StyleProp<TextStyle>;
  style: StyleProp<ViewStyle>;
  leftIcon?: JSX.Element;
  type?: 'password' | 'number' | 'email' | 'phone' | 'text' | 'percentage';
  autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  inputRef?: any;
  floatingLabel?: boolean;
  floatingLabelStyle?: StyleProp<TextStyle>;
  prefix?: string;
  [key: string]: any;
}

const AppTextInput = ({
  error,
  style,
  label,
  required,
  icon,
  onIconPress,
  textStyle,
  value,
  onChangeText,
  placeholder,
  onBlur,
  placeholderTextColor,
  leftIcon,
  type,
  autoCapitalize = 'none',
  leftIconStyle,
  rightIconStyle,
  onFocus,
  inputRef,
  floatingLabel,
  floatingLabelStyle = {},
  onPressIn,
  prefix,
  textContentType,
  autoCorrect,
  ...rest
}: props) => {
  const styles = useAppTextInputStyle({leftIcon, editable: rest?.editable});
  const {colors} = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === 'password',
  );
  const handleOnBlur = () => {
    if (!value) {
      setIsFocused(false);
    }
  };
  const onFocusInput = () => {
    setIsFocused(true);
  };
  const handlePasswordIcon = () => {
    setSecureTextEntry(prev => !prev);
  };

  const getKeyboardType = () => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      case 'percentage':
        return 'numeric';
      default:
        return 'default';
    }
  };

  return (
    <>
      {label && !floatingLabel ? (
        <AppText style={styles.label}>
          {label}
          {required ? (
            <AppText style={[styles.label, styles.required]}>*</AppText>
          ) : null}
        </AppText>
      ) : null}
      <View
        style={[
          styles.container,
          style,
          error ? styles.errorWrapper : {},
          prefix ? styles.prefixContainer : {},
        ]}>
        {(label && floatingLabel && value) || isFocused ? (
          <AppText style={[styles.floatingLabel, floatingLabelStyle]}>
            {label}
          </AppText>
        ) : null}
        {leftIcon ? (
          <View style={[styles.leftIcon, leftIconStyle]}>{leftIcon}</View>
        ) : null}
        {prefix ? (
          <AppText style={[styles.prefixTextStyles, textStyle]}>
            {prefix}
          </AppText>
        ) : null}
        <TextInput
          onBlur={e => {
            if (onBlur) {
              onBlur(e);
            } else {
              if (floatingLabel) {
                handleOnBlur();
              }
            }
          }}
          ref={inputRef}
          keyboardType={getKeyboardType()}
          placeholder={
            floatingLabel
              ? isFocused
                ? ''
                : placeholder || label
              : placeholder
          }
          placeholderTextColor={placeholderTextColor || colors.gray}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={[styles.textInputStyles, textStyle]}
          autoCapitalize={autoCapitalize}
          onFocus={e => {
            if (onFocus) {
              onFocus(e);
            } else {
              if (floatingLabel) {
                onFocusInput();
              }
            }
          }}
          textContentType={textContentType}
          autoCorrect={autoCorrect}
          onPressIn={onPressIn}
          {...rest}
        />
        {type === 'password' ? (
          <Pressable
            style={[styles.rightIcon, rightIconStyle]}
            onPress={handlePasswordIcon}>
            {!secureTextEntry ? (
              <SvgIcon.eyeOffIcon fill={colors.primary} />
            ) : (
              <SvgIcon.eyeIcon fill={colors.primary} />
            )}
          </Pressable>
        ) : null}
        {icon && type !== 'password' ? (
          <Pressable
            style={[styles.rightIcon, rightIconStyle]}
            onPress={onIconPress}>
            {icon}
          </Pressable>
        ) : null}
      </View>
      {error && <AppText style={styles.error}>{error}</AppText>}
    </>
  );
};

export default AppTextInput;
