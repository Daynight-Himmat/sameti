import React from 'react';
import { LabelText } from '../labelText/LabelText';
import { useHeadingTextStyle } from './HeadingTextStyle';
import { StyleProp, TextStyle, View } from 'react-native';

interface Props {
  headingKey?: string;
  headingText?: string;
  paddingHorizontal?: number;
  textStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
}

const HeadingText: React.FC<Props> = ({
  textStyle,
  headingKey,
  valueStyle,
  headingText,
  paddingHorizontal,
}) => {
  const { styles } = useHeadingTextStyle({
    paddingHorizontal: paddingHorizontal,
  });

  return (
    <View style={styles.container}>
      <LabelText
        value={headingText}
        keyText={headingKey}
        keyStyle={[styles.label, textStyle]}
        valueStyle={[styles.label, valueStyle]}
      />
    </View>
  );
};

export default HeadingText;
