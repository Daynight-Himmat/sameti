import { useEffect, useState } from 'react';
import { closeModal } from '../../../../helpers/utils';
import useSearchFilterStyle from '../SearchFilterStyle';
import { MODALS } from '../../../../constants/routeConstant';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';
import { SearchCategoriesData } from '../../../../interfaces/searchAddressData';
import { useGlobalSearchCategoriesQuery } from '../../../../services/appService';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useSearchFilter = ({ modal }: Props) => {
  const { styles, colors } = useSearchFilterStyle();
  const categoryId = modal.getParam('categoryId', '');
  const [category, setCategory] = useState<string>(categoryId);
  const setCategoryId = modal.getParam('setCategoryId', () => {});
  const [categories, setCategories] = useState<SearchCategoriesData[]>();
  const { data: getGlobalSearchResponse } = useGlobalSearchCategoriesQuery();

  const onClosePress = () => closeModal(MODALS.searchCategories);

  const onSetCategoryPress = (id: string) => {
    setCategory(id);
  };

  const onPressConfirm = () => {
    if (categoryId) {
      setCategoryId?.(category);
      closeModal(MODALS.searchCategories);
    }
  };

  useEffect(() => {
    if (getGlobalSearchResponse?.status === 200) {
      setCategories(getGlobalSearchResponse?.data);
    }
  }, [getGlobalSearchResponse]);

  return {
    styles,
    colors,
    category,
    categories,
    onClosePress,
    setCategoryId,
    onPressConfirm,
    onSetCategoryPress,
  };
};

export default useSearchFilter;
