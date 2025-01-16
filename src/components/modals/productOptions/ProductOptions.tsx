import {
  CommonInterface,
  SortingInterface,
} from '../../../interfaces/commonInterface';
import { View } from 'react-native';
import Svg from '../../../assets/svg';
import React, { useCallback } from 'react';
import Divider from '../../divider/Divider';
import SwitchButton from '../../switch/Switch';
import ListView from '../../listComponents/List';
import SvgButton from '../../svgButton/SvgButton';
import { closeModal } from '../../../helpers/utils';
import ListItem from '../../listComponents/ListItem';
import HeadingText from '../../headingText/HeadingText';
import useProductOptions from './hooks/useProductOptions';
import { MODALS } from '../../../constants/routeConstant';
import { SORT_OPTIONS } from '../../../constants/constants';
import { setProductSort, setVatValue } from '../../../redux/app/appSlice';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}
const BranchProductOptions = React.memo(({ modal }: Props) => {
  const {
    vats,
    colors,
    styles,
    dispatch,
    productSort,
    marchantOption,
    onCategoryPress,
    onMarchantPress,
  } = useProductOptions({
    modal: modal,
  });

  const renderRightIcon = useCallback(() => {
    return (
      <SwitchButton
        isSelect={vats}
        leftText={'Exc. Vat'}
        rightText={'Inc. Vat'}
        setSwitchValue={(value: boolean) => {
          dispatch(setVatValue(value));
        }}
      />
    );
  }, [dispatch, vats]);

  const renderSortBy = ({
    item,
    index,
  }: {
    item: SortingInterface;
    index: number;
  }) => {
    return (
      <ListItem
        size={14}
        item={item}
        key={index}
        type={'radio'}
        valueField={'title'}
        labelField={'title'}
        itemTextStyle={styles.title}
        isSelected={productSort?.id === item?.id}
        setSelectedId={() => {
          onMarchantPress?.(item?.title);
          dispatch(setProductSort(item));
        }}
      />
    );
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: CommonInterface;
    index: number;
  }) => {
    return (
      <ListView
        key={index}
        title={item?.title}
        onPress={() => {
          onMarchantPress?.(item?.title);
          closeModal(MODALS.productOptions);
        }}
        rightIcon={<Svg.forwordArrowIcon fill={colors.darkGrayishBlue} />}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeadingText headingKey="More Options" />
        <SvgButton
          size={14}
          icon={'clearIcon'}
          onPress={() => closeModal(MODALS.productOptions)}
        />
      </View>
      <View>
        <ListView
          isSeprator
          title={'Vat'}
          rightIconSize={14}
          rightIcon={renderRightIcon()}
        />
        <ListView
          isSeprator
          rightIconSize={14}
          title={'Categories'}
          onPress={onCategoryPress}
          rightIcon={'forwordArrowIcon'}
        />
        <HeadingText headingKey="Sort By" />
        {SORT_OPTIONS.map((i: SortingInterface, index: number) =>
          renderSortBy({ item: i, index: index }),
        )}
        <Divider />
        <HeadingText headingKey="Marchant Options" />
        {marchantOption &&
          marchantOption?.map((i: CommonInterface, index: number) =>
            renderItem({ item: i, index: index }),
          )}
        <Divider />
      </View>
    </View>
  );
});

export default BranchProductOptions;
