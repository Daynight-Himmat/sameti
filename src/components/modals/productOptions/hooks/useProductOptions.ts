import { useEffect, useState } from 'react';
import { RootState } from '../../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useProductOptionsStyle } from '../ProductOptionStyle';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useProductOptions = ({ modal }: Props) => {
  const dispatch = useDispatch();
  const [vat, satVat] = useState(false);
  const vatValue = modal.getParam('vat');
  const { styles, colors } = useProductOptionsStyle();
  const marchantOption = modal.getParam('marchantOption', []);
  const [selectedId, setSelectedId] = useState<any[]>([]);
  const [openId, setOpenId] = useState<number | null>(null);
  const onCategoryPress = modal.getParam('onCategoryPress', () => {});
  const onMarchantPress = modal.getParam('onMarchantPress', () => {});

  const vats = useSelector((state: RootState) => state?.app?.vatValue);
  const productSort = useSelector(
    (state: RootState) => state?.app?.productSortBy,
  );

  useEffect(() => {
    satVat(vatValue);
  }, [satVat, vatValue]);

  return {
    vat,
    vats,
    styles,
    openId,
    colors,
    satVat,
    dispatch,
    setOpenId,
    selectedId,
    productSort,
    setSelectedId,
    marchantOption,
    onMarchantPress,
    onCategoryPress,
  };
};

export default useProductOptions;
