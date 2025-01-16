import {
  View,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import svg from '../../assets/svg';
import AppText from '../text/AppText';
import SvgIcon from '../../assets/svg';
import SvgButton from '../svgButton/SvgButton';
import React, { useCallback, useState } from 'react';
import { useAppTextInputStyle } from './AppTextInputStyle';
import { TEXTINPUT_ICON_SIZE } from '../../constants/constants';

export interface AppTextProps extends TextInputProps {
  label?: string;
  inputRef?: any;
  required?: boolean;
  error?: string | undefined;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  icon?: keyof typeof SvgIcon | React.JSX.Element;
  leftIcon?: keyof typeof SvgIcon | React.JSX.Element;
  onIconPress?: () => Promise<void> | undefined | void;
  autoCapitalize?: 'characters' | 'words' | 'sentences' | 'none';
  type?: 'password' | 'number' | 'email' | 'phone' | 'text' | 'percentage';
}

const AppTextInput = ({
  icon,
  type,
  error,
  label,
  style,
  value,
  onBlur,
  onFocus,
  required,
  leftIcon,
  inputRef,
  textStyle,
  onPressIn,
  labelStyle,
  placeholder,
  onIconPress,
  autoCorrect,
  onChangeText,
  leftIconStyle,
  rightIconStyle,
  textContentType,
  placeholderTextColor,
  autoCapitalize = 'none',
  ...rest
}: AppTextProps) => {
  const { styles, colors } = useAppTextInputStyle({
    leftIcon,
    type,
    editable: rest?.editable,
  });
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(
    type === 'password',
  );

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

  const SvgPassword = secureTextEntry ? 'eyeOffIcon' : 'eyeIcon';

  const renderIcon = useCallback(
    (
      rightIcon?: keyof typeof svg | React.JSX.Element,
      onPress?: () => void,
    ) => (
      <SvgButton
        icon={rightIcon}
        onPress={onPress}
        size={TEXTINPUT_ICON_SIZE}
        style={[styles.rightIcon, rightIconStyle]}
        iconColor={colors.gray}
      />
    ),
    [colors, styles, rightIconStyle],
  );

  return (
    <>
      {label ? (
        <AppText style={[styles.label, labelStyle]}>
          {label}
          {required ? (
            <AppText style={[styles.label, styles.required]}>*</AppText>
          ) : null}
        </AppText>
      ) : null}
      <View style={styles.margin}>
        <View
          style={[styles.container, style, error ? styles.errorWrapper : {}]}>
          {leftIcon ? (
            <SvgButton
              icon={leftIcon}
              size={TEXTINPUT_ICON_SIZE}
              iconColor={colors.grayishBlue}
              style={[styles.leftIcon, leftIconStyle]}
            />
          ) : null}
          <TextInput
            value={value}
            ref={inputRef}
            onBlur={onBlur}
            onPressIn={onPressIn}
            allowFontScaling={false}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            keyboardType={getKeyboardType()}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
            style={[styles.textInputStyles, textStyle]}
            placeholderTextColor={placeholderTextColor || colors.grayishBlue}
            onFocus={e => {
              if (onFocus) {
                onFocus(e);
              }
            }}
            {...rest}
          />
          {type === 'password'
            ? renderIcon(SvgPassword, handlePasswordIcon)
            : null}
          {icon && type !== 'password' ? renderIcon(icon, onIconPress) : null}
        </View>
        {error && <AppText style={styles.error}>{error}</AppText>}
      </View>
    </>
  );
};

export default AppTextInput;
