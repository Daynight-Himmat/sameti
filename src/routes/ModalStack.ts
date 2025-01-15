import {createModalStack, ModalStackConfig} from 'react-native-modalfy';
import LoadingIndicator from '../components/loader/LoadingIndicator';
import NetworkWarningModal from '../components/modals/networkWarning/NetworkWarning';
import {MODALS} from '../constants/routeConstant';
import ConfirmationModal from '../components/modals/confirmation/Confirmation';

const modalConfig: ModalStackConfig = {
  [MODALS.loader]: {
    modal: LoadingIndicator,
    backBehavior: 'none',
  },
  [MODALS.network]: {
    modal: NetworkWarningModal,
    backBehavior: 'none',
  },
  [MODALS.confirmation]: {
    modal: ConfirmationModal,
    backBehavior: 'none',
  },
};
const defaultOptions = {backdropOpacity: 0.6};

export default createModalStack(modalConfig, defaultOptions);
