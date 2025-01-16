import { closeModal } from '../../../../helpers/utils';
import { MODALS } from '../../../../constants/routeConstant';

const useAvailableStoreInfo = () => {
  const onClosePress = () => closeModal(MODALS.availableStoreInfo);

  return {
    onClosePress,
  };
};

export default useAvailableStoreInfo;
