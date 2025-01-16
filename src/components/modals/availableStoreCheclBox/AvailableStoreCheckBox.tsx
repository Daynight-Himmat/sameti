import {
  View,
  Platform,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import AppText from '../../text/AppText';
import React, { useCallback } from 'react';
import ListItem from '../../listComponents/ListItem';
import FooterButton from '../../footerButton/FooterButton';
import useAvailableStoreCheckBox from './hooks/useAvailableStoreCheckBox';
import { useAvailableStoreCheckBoxStyle } from './AvailabelStoreCheckBoxStyle';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const AvailableStoreCheckBox = ({ modal }: Props) => {
  const { styles, colors } = useAvailableStoreCheckBoxStyle();
  const {
    onConfrim,
    selectStore,
    handleCheck,
    onClosePress,
    onSelectAllPress,
    customerSchemeLink,
  } = useAvailableStoreCheckBox({
    modal: modal,
  });

  const renderItem = useCallback(
    ({ item }: { item: any }) => (
      <ListItem
        item={item}
        type="check"
        labelField={'schemeName'}
        itemTextStyle={styles.title}
        valueField={'priceFrameworkId'}
        setSelectedId={() => handleCheck(item)}
        isSelected={selectStore.some(
          i => i.priceFrameworkId === item?.priceFrameworkId,
        )}
      />
    ),
    [handleCheck, selectStore, styles],
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.subContainer}>
        <View style={styles.labelContainer}>
          <AppText fontFamily={'semiBold'} style={styles.label}>
            Select Schemes
          </AppText>
          <Pressable
            style={[
              styles.selectAll,
              {
                borderColor:
                  selectStore?.length !== customerSchemeLink?.length
                    ? colors.gray
                    : colors.green,
                backgroundColor:
                  selectStore?.length === customerSchemeLink?.length
                    ? colors.green
                    : colors.white,
              },
            ]}
            onPress={onSelectAllPress}>
            <AppText
              fontFamily={'semiBold'}
              style={[
                styles.selectAllText,
                {
                  color:
                    selectStore?.length === customerSchemeLink?.length
                      ? colors.white
                      : colors.gray,
                },
              ]}>
              Select All
            </AppText>
          </Pressable>
        </View>
        <FlatList
          scrollEnabled={false}
          renderItem={renderItem}
          data={customerSchemeLink || []}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={styles.flatList}
        />
        <View style={styles.footView}>
          <FooterButton
            borderRadius={30}
            cancelLabel={'Cancel'}
            confirmLabel={'Confirm'}
            onPressConfirm={onConfrim}
            onPressCancel={onClosePress}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AvailableStoreCheckBox;
