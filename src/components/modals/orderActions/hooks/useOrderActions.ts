import { useEffect, useState } from 'react';
import { useOrderActionsStyle } from '../OrderActionsStyle';
import { ORDER_ACTION } from '../../../../constants/constants';
import { OrderList } from '../../../../interfaces/orderInterface';
import { CommonInterface } from '../../../../interfaces/commonInterface';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useOrderActions = ({ modal }: Props) => {
  const { styles, colors } = useOrderActionsStyle();
  const getOrderData: OrderList = modal.getParam('data');
  const [order, setOrderList] = useState<CommonInterface[]>([]);
  const onOrderPress = modal.getParam('onOrderPress', () => {});

  useEffect(() => {
    const paymentFailedOrPending = ['Failed', 'Pending'].includes(
      getOrderData?.paymentStatus,
    );
    const orderCancelled = getOrderData?.orderStatus === 'Cancelled';
    const orderDelivered = getOrderData?.orderStatus === 'Delivered';

    const getFilteredActions = () => {
      if (paymentFailedOrPending) {
        return ORDER_ACTION.filter(i =>
          [!orderCancelled && 1, 2, 4].includes(i?.id),
        );
      }
      if (orderCancelled) {
        return ORDER_ACTION.filter(i => i?.id !== 1 && i?.id !== 5);
      }
      if (!orderDelivered) {
        return ORDER_ACTION.filter(i => i?.id !== 5);
      }
      return ORDER_ACTION.filter(i => i?.id !== 1);
    };

    setOrderList(getFilteredActions());
  }, [getOrderData]);

  return {
    order,
    styles,
    colors,
    onOrderPress,
  };
};

export default useOrderActions;
