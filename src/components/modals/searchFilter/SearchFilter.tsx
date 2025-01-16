import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import EmptyView from '../../empty/EmptyView';
import { closeModal } from '../../../helpers/utils';
import ListItem from '../../listComponents/ListItem';
import useSearchFilter from './hooks/useSearchFilter';
import HeadingText from '../../headingText/HeadingText';
import { MODALS } from '../../../constants/routeConstant';
import FooterButton from '../../footerButton/FooterButton';
import { SearchCategoriesData } from '../../../interfaces/searchAddressData';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}
const SearchBottomSheet: React.FC<Props> = ({ modal }) => {
  const { styles, category, categories, onPressConfirm, onSetCategoryPress } =
    useSearchFilter({
      modal: modal,
    });

  const renderItem = ({ item }: { item: SearchCategoriesData }) => {
    const isSelected = item?.value === category;
    return (
      <ListItem
        size={18}
        isSeprator
        item={item}
        type={'radio'}
        labelField={'text'}
        valueField={'value'}
        isSelected={isSelected}
        itemTextStyle={styles.itemText}
        setSelectedId={onSetCategoryPress}
      />
    );
  };

  const renderEmpty = useCallback(() => {
    return <EmptyView />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <HeadingText
          textStyle={styles.heading}
          headingKey="Search Categories"
        />
      </View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(_, i) => i.toString()}
      />
      <View style={styles.footer}>
        <FooterButton
          borderRadius={26}
          cancelLabel="Cancel"
          confirmLabel="Confirm"
          onPressConfirm={onPressConfirm}
          onPressCancel={() => closeModal(MODALS.searchCategories)}
        />
      </View>
    </View>
  );
};

export default SearchBottomSheet;
