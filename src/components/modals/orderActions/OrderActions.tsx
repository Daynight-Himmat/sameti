import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import EmptyView from '../../empty/EmptyView';
import ListView from '../../listComponents/List';
import SvgButton from '../../svgButton/SvgButton';
import { closeModal } from '../../../helpers/utils';
import useOrderActions from './hooks/useOrderActions';
import HeadingText from '../../headingText/HeadingText';
import { MODALS } from '../../../constants/routeConstant';
import { CommonInterface } from '../../../interfaces/commonInterface';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const OrderActions = ({ modal }: Props) => {
  const { styles, onOrderPress, order } = useOrderActions({
    modal: modal,
  });

  const renderItem = ({ item }: { item: CommonInterface }) => {
    return (
      <>
        <ListView
          isSeprator={true}
          title={item?.title}
          titleStyle={styles.itemText}
          rightIcon={'forwordArrowIcon'}
          onPress={() => {
            closeModal(MODALS.orderActions);
            onOrderPress?.(item?.title);
          }}
        />
      </>
    );
  };

  const renderEmpty = useCallback(() => {
    return <EmptyView />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <HeadingText textStyle={styles.heading} headingKey="Order Actions" />
        <SvgButton
          icon={'clearIcon'}
          onPress={() => closeModal(MODALS.orderActions)}
        />
      </View>
      <FlatList
        data={order}
        scrollEnabled={false}
        style={styles.flatList}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(_, i) => i.toString()}
      />
    </View>
  );
};

export default OrderActions;
