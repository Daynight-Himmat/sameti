import React from 'react';
import AppTextInput from '../textInput/AppTextInput';
import { useSearchBoxStyle } from './SearchInputBoxStyle';
import { PLACEHOLDER } from '../../constants/stringConstants';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

interface Props {
  searchValue?: string;
  onSearchPress?: () => void;
  searchView?: StyleProp<ViewStyle>;
  searchStyle?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  searchContainer?: StyleProp<ViewStyle>;
}

const SearchBox: React.FC<Props> = ({
  searchValue,
  searchView,
  searchStyle,
  onChangeText,
  onSearchPress,
  searchContainer,
}) => {
  const { styles, colors } = useSearchBoxStyle();
  return (
    <View style={[styles.searchContainer, searchContainer]}>
      <AppTextInput
        value={searchValue}
        icon={'searchIcon'}
        onIconPress={onSearchPress}
        onChangeText={onChangeText}
        placeholder={PLACEHOLDER?.search}
        placeholderTextColor={colors.darkGray}
        style={[styles?.searchInput, searchView]}
        textStyle={[styles?.textStyle, searchStyle]}
      />
    </View>
  );
};

export default SearchBox;
