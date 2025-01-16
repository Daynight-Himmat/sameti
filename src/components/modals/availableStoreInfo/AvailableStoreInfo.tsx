import AppText from '../../text/AppText';
import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import ListView from '../../listComponents/List';
import SvgButton from '../../svgButton/SvgButton';
import useAvailableStoreInfo from './hooks/useAvailableStoreInfo';
import { useAvailableStoreInfoStyle } from './AvailableStoreInfoStyle';
import { AvailableStoreInterface } from '../../../interfaces/availableStore';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';
import { AVAILABLE_STORE as AVAILABLE_STORE_INFO } from '../../../constants/constants';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}
const AvailableStoreInfo: React.FC<Props> = ({}) => {
  const { onClosePress } = useAvailableStoreInfo();
  const { styles, colors } = useAvailableStoreInfoStyle();

  const renderItem = useCallback(
    ({ item }: { item: AvailableStoreInterface }) => (
      <ListView
        title={item?.title}
        leftIcon={item?.icon}
        titleStyle={styles.title}
        leftIconColor={item?.iconColor}
      />
    ),
    [styles],
  );

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.labelContainer}>
          <AppText fontFamily={'bold'} style={styles.label}>
            Schemes Status
          </AppText>
          <SvgButton
            size={14}
            icon={'clearIcon'}
            onPress={onClosePress}
            iconColor={colors?.black}
          />
        </View>
        <FlatList
          scrollEnabled={false}
          renderItem={renderItem}
          data={AVAILABLE_STORE_INFO}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={styles.flatList}
        />
      </View>
    </View>
  );
};

export default AvailableStoreInfo;
