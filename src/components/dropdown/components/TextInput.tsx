/* eslint-disable @typescript-eslint/no-shadow */
import Svg from '../../../assets/svg';
import { useTextStyle } from './TextInputStyle';
import React, { useEffect, useState } from 'react';
import AppTextInput from '../../textInput/AppTextInput';
import type { CTextInput } from '../interface/InputProps';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

const defaultProps = {
  style: {},
  value: '',
  showIcon: true,
  numeric: false,
  currency: false,
};

const TextInputComponent: CTextInput = props => {
  const {
    style,
    value,
    showIcon,
    fontFamily,
    inputStyle,
    renderLeftIcon,
    renderRightIcon,
    placeholder = '',
    placeholderTextColor = '#000',
    onChangeText = (_value: string) => {},
  } = props;

  const [text, setText] = useState<string>('');
  const { styles } = useTextStyle();

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  const onChange = (text: string) => {
    setText(text);
    onChangeText(text);
  };

  const _renderRightIcon = () => {
    if (showIcon) {
      if (renderRightIcon) {
        return renderRightIcon();
      }
      if (text.length > 0) {
        return (
          <TouchableOpacity onPress={() => onChange('')}>
            <Svg.arrowDownIcon height={18} width={18} />
          </TouchableOpacity>
        );
      }
      return <View />;
    }
    return <View />;
  };

  return (
    <TouchableWithoutFeedback>
      <View style={[style]}>
        <View style={styles.textInput}>
          {renderLeftIcon?.()}
          <AppTextInput
            {...props}
            style={[
              styles.input,
              inputStyle,
              fontFamily
                ? {
                    fontFamily: fontFamily,
                  }
                : {},
            ]}
            value={text}
            onChangeText={onChange}
            placeholder={placeholder}
            icon={_renderRightIcon()}
            placeholderTextColor={placeholderTextColor}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

TextInputComponent.defaultProps = defaultProps;

export default TextInputComponent;
