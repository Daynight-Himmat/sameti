import {
  MarchantInfo,
  MarchantProductData,
} from '../../../../interfaces/marchantInterface';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useAddToCartSchemePrice = ({ modal }: Props) => {
  const addToCartPress = modal.getParam('addToCartPress');
  const items: MarchantProductData = modal.getParam('item');
  const vatPrice: MarchantInfo = modal.getParam('vat', false);
  const marchantInfo: MarchantInfo = modal.getParam('marchantInfo');

  return {
    items,
    vatPrice,
    marchantInfo,
    addToCartPress,
  };
};

export default useAddToCartSchemePrice;
