import AppText from '../text/AppText';
import React, { useCallback } from 'react';
import { useNoteContainerStyle } from './NotesContainerStyle';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

interface Props {
  deliveryTime?: string;
  minimumOrderRate?: string;
  style?: StyleProp<ViewStyle>;
  noteTextStyle?: StyleProp<TextStyle>;
}

const NoteContainer = React.memo(
  ({ minimumOrderRate, deliveryTime, style, noteTextStyle }: Props) => {
    const { styles } = useNoteContainerStyle();

    const renderText = useCallback(
      (text?: string) =>
        text && (
          <AppText style={[styles.headerText, noteTextStyle]}>{text}</AppText>
        ),
      [noteTextStyle, styles],
    );
    return (
      (minimumOrderRate || deliveryTime) && (
        <View style={[styles.renderHeader, style]}>
          {renderText(minimumOrderRate)}
          {renderText(deliveryTime)}
        </View>
      )
    );
  },
);

export default NoteContainer;
