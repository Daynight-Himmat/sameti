import React from 'react';
import { View } from 'react-native';
import Svg from '../../../assets/svg';
import AppText from '../../text/AppText';
import FooterButton from '../../footerButton/FooterButton';
import { useConfirmationStyle } from './ConfirmationStyle';
import { UsableModalComponentProp, ModalfyParams } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const ConfirmationModal: React.FC<Props> = ({ modal }) => {
  const icon = modal.getParam('icon', '');
  const { styles } = useConfirmationStyle();
  const Title = modal.getParam('title', '');
  const SubTitle = modal.getParam('subTitle', '');
  const titleStyle = modal.getParam('titleStyle', {});
  const onPressCancel = modal.getParam('onPressCancel');
  const subTitleStyle = modal.getParam('subTitleStyle', {});
  const cancelLabel = modal.getParam('cancelLabel', 'Close');
  const confirmLabel = modal.getParam('confirmLabel', 'Confirm');
  const onPressConfirm = modal.getParam('onPressConfirm', () => {});

  const SvgIcon = Svg[icon as keyof typeof Svg];

  return (
    <View style={styles.modalView}>
      <View style={styles.content}>
        {icon ? <SvgIcon /> : null}
        {typeof Title === 'string' ? (
          <AppText fontFamily={'bold'} style={[styles.bodyText, titleStyle]}>
            {Title}
          </AppText>
        ) : (
          <Title />
        )}
        {typeof SubTitle === 'string' ? (
          <AppText style={[styles.bodySubTitle, subTitleStyle]}>
            {SubTitle}
          </AppText>
        ) : (
          <SubTitle />
        )}
        <FooterButton
          height={35}
          borderRadius={26}
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          onPressCancel={onPressCancel}
          onPressConfirm={onPressConfirm}
        />
      </View>
    </View>
  );
};

export default ConfirmationModal;
