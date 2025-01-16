import { closeModal } from '../../../../helpers/utils';
import { useCallback, useEffect, useState } from 'react';
import { MODALS } from '../../../../constants/routeConstant';
import { CustomerSchemeLink } from '../../../../interfaces/availableStore';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useAvailableStoreCheckBox = ({ modal }: Props) => {
  const items = modal.getParam('item', []);
  const selectedStoreId = modal.getParam('selectedStoreId', []);
  const [selectStore, setSelectStore] = useState<CustomerSchemeLink[]>(
    selectedStoreId ? selectedStoreId : [],
  );
  const onConfrimPress = modal.getParam('onConfrimPress', () => {});
  const [customerSchemeLink, setCustomerSchemeLink] = useState<
    CustomerSchemeLink[]
  >([]);

  const onConfrim = () => {
    onConfrimPress(selectStore);
    closeModal(MODALS.availableStoreCheckBox);
  };

  useEffect(() => {
    setCustomerSchemeLink(items);
  }, [items]);

  const onClosePress = () => closeModal(MODALS.availableStoreCheckBox);

  const handleCheck = useCallback(
    (item: CustomerSchemeLink) => {
      if (
        selectStore.some(i => i.priceFrameworkId === item?.priceFrameworkId)
      ) {
        setSelectStore(prevItems =>
          prevItems?.filter(
            (prevItem: any) =>
              prevItem?.priceFrameworkId !== item.priceFrameworkId,
          ),
        );
      } else {
        setSelectStore(prevItems => [...prevItems, item]);
      }
    },
    [selectStore],
  );

  const onSelectAllPress = () => {
    if (selectStore.length === 0) {
      setSelectStore(customerSchemeLink?.map(i => i));
    } else {
      setSelectStore([]);
    }
  };

  return {
    items,
    onConfrim,
    selectStore,
    handleCheck,
    onClosePress,
    onSelectAllPress,
    customerSchemeLink,
  };
};

export default useAvailableStoreCheckBox;
