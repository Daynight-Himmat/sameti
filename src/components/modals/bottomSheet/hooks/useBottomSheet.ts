import { closeModal } from '../../../../helpers/utils';
import { useCallback, useEffect, useState } from 'react';
import { useBottomSheetStyle } from '../BottomSheetStyle';
import { MODALS } from '../../../../constants/routeConstant';
import {
  SearchData,
  SearchParams,
} from '../../../../interfaces/searchAddressData';
import { SEARCH_ACCESS_CODE } from '../../../../constants/constants';
import { ListTypes } from '../../../../interfaces/listTypes/listType';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';
import { useLazySearchAddressQuery } from '../../../../services/addressService';
import { Keyboard } from 'react-native';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useBottomSheet = ({ modal }: Props) => {
  const item = modal.getParam('item', []);
  const value = modal.getParam('value', '');
  const dataType = modal.getParam('dataType');
  const nameKey = modal.getParam('nameKey', '');
  const [selectId, setSelectId] = useState(value);
  const { styles, colors } = useBottomSheetStyle();
  const address = modal.getParam('address', false);
  const type: ListTypes = modal.getParam('type', '');
  const [searchValue, setSearchValue] = useState('');
  const [data, setData] = useState<any[]>(item || []);
  const onTextPress = modal.getParam('type', () => {});
  const onChange = modal.getParam('onChange', () => {});
  const isShowButton = modal.getParam('isShowButton', true);
  const [selectItems, setSelectItems] = useState<any[]>([]);
  const onSubmitPress = modal.getParam('onSubmitPress', () => {});
  const [searchAddress, { data: searchData, isLoading, isFetching }] =
    useLazySearchAddressQuery();

  useEffect(() => {
    if (typeof value === 'object') {
      setSelectItems(value);
    }
  }, [value]);

  const handleCheck = (selectItem: any) => {
    if (selectItems.includes(selectItem)) {
      setSelectItems(prevItems =>
        prevItems?.filter((prevItem: any) => prevItem !== selectItem),
      );
    } else {
      setSelectItems(prevItems => [...prevItems, selectItem]);
    }
  };

  const handleObjectCheck = useCallback(
    (objectItem: SearchData) => {
      if (type === 'address') {
        const addressData: string = objectItem?.PostalCode;
        onChange?.(addressData.trim());
        onSubmitPress?.(objectItem);
        closeModal(MODALS.bottomSheet);
      }
    },
    [onChange, onSubmitPress, type],
  );

  const handleSetSelectedId = (i: any) => {
    switch (type) {
      case 'radio':
        return setSelectId?.(i);
      case 'check':
        return handleCheck?.(i);
      case 'address':
        return handleObjectCheck?.(i);
      default:
        return;
    }
  };

  const onSearch = () => {
    Keyboard.dismiss();
    if (type === 'address') {
      const params: SearchParams = {
        access_code: SEARCH_ACCESS_CODE,
        postCode: searchValue,
      };
      searchAddress(params);
    } else {
      const onFilterData = item?.filter((onRenderItem: any) =>
        onRenderItem?.[`${nameKey}`]
          .toLowerCase()
          .includes(searchValue?.toLowerCase()),
      );
      setData(onFilterData);
    }
  };

  const renderSearchData = useCallback(() => {
    if (searchData?.status === 200) {
      setData(searchData?.data?.Data);
    } else {
      setData([]);
    }
  }, [searchData]);

  useEffect(() => renderSearchData(), [renderSearchData]);

  const onPressConfirm = () => {
    try {
      if (type === 'radio') {
        if (selectId) {
          onChange?.(selectId);
          onSubmitPress?.(selectId);
          closeModal(MODALS.bottomSheet);
        }
      } else {
        if (selectItems) {
          onChange?.(selectItems);
          onSubmitPress?.(selectItems);
          closeModal(MODALS.bottomSheet);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  return {
    item,
    data,
    type,
    value,
    styles,
    colors,
    setData,
    address,
    nameKey,
    onChange,
    selectId,
    onSearch,
    dataType,
    isLoading,
    isFetching,
    onTextPress,
    searchValue,
    setSelectId,
    handleCheck,
    selectItems,
    isShowButton,
    onSubmitPress,
    onPressConfirm,
    setSearchValue,
    renderSearchData,
    handleObjectCheck,
    handleSetSelectedId,
  };
};

export default useBottomSheet;
