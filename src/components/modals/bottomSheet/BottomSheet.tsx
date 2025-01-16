import {
  View,
  FlatList,
  Platform,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import AppText from '../../text/AppText';
import React, { useCallback } from 'react';
import EmptyView from '../../empty/EmptyView';
import { closeModal } from '../../../helpers/utils';
import useBottomSheet from './hooks/useBottomSheet';
import ListItem from '../../listComponents/ListItem';
import AppTextInput from '../../textInput/AppTextInput';
import { MODALS } from '../../../constants/routeConstant';
import FooterButton from '../../footerButton/FooterButton';
import { SEARCH } from '../../../constants/stringConstants';
import { SearchData } from '../../../interfaces/searchAddressData';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const BottomSheet: React.FC<Props> = ({ modal }) => {
  const {
    data,
    type,
    styles,
    colors,
    selectId,
    onSearch,
    isLoading,
    isFetching,
    selectItems,
    setSearchValue,
    onPressConfirm,
    handleSetSelectedId,
    isShowButton = false,
  } = useBottomSheet({ modal: modal });

  const renderAddress = useCallback(
    ({ item }: { item: SearchData }) => {
      const address1: Array<String> = [
        item?.Address1,
        item?.Address2,
        item?.PostalCode,
        item?.City,
      ];
      const addressValue: string = address1.filter(Boolean).join(', ');
      return (
        <AppText numberOfLines={2} style={styles.addressText}>
          {addressValue}
        </AppText>
      );
    },
    [styles],
  );

  const renderItem = ({ item }: { item: any }) => {
    const isSelect: boolean = item?.id === selectId;
    const isSelected =
      type === 'radio' ? isSelect : selectItems.includes(item?.id);
    return (
      <ListItem
        size={18}
        isSeprator
        item={item}
        type={type}
        isSelected={isSelected}
        setSelectedId={handleSetSelectedId}
        renderItem={renderAddress({ item: item })}
        onTextPress={() => handleSetSelectedId(item)}
        rightIcon={type === 'address' ? 'addressArrow' : undefined}
      />
    );
  };

  const renderEmpty = useCallback(() => {
    return isLoading || isFetching ? (
      <ActivityIndicator />
    ) : (
      <EmptyView emptyText="No Address found" />
    );
  }, [isFetching, isLoading]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.inputContainer}>
        <AppTextInput
          icon={'searchIcon'}
          style={styles.input}
          onIconPress={onSearch}
          autoCapitalize={'sentences'}
          textStyle={styles.inputText}
          onChangeText={setSearchValue}
          placeholderTextColor={colors?.gray}
          placeholder={type === 'address' ? SEARCH.address : SEARCH.search}
        />
      </View>
      <FlatList
        data={data}
        numColumns={1}
        nestedScrollEnabled
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: SearchData | any, index: number) =>
          type === 'address' ? index : item?.id
        }
      />
      <View style={styles.footer}>
        {isShowButton && (
          <FooterButton
            cancelLabel="Cancel"
            confirmLabel="Confirm"
            onPressConfirm={onPressConfirm}
            onPressCancel={() => closeModal(MODALS.bottomSheet)}
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default BottomSheet;
