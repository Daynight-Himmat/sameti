import React from 'react';
import AppText from '../text/AppText';
import { useEmptyViewStyle } from './EmptyViewStyle';
import { EMPTY } from '../../constants/stringConstants';
import { TextStyle, View, ViewStyle } from 'react-native';

interface Props {
  emptyText?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const EmptyView = React.memo(
  ({ emptyText, textStyle, containerStyle }: Props) => {
    const styles = useEmptyViewStyle();
    return (
      <View style={[styles.noDataContainer, containerStyle]}>
        <AppText fontFamily={'medium'} style={[styles.noDataText, textStyle]}>
          {emptyText || EMPTY}
        </AppText>
      </View>
    );
  },
);

export default EmptyView;
