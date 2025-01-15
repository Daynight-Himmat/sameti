import React from 'react';
import {View} from 'react-native';
import {useConfirmationStyle} from './ConfirmationStyle';
import {UsableModalComponentProp, ModalfyParams} from 'react-native-modalfy';
import Svg from '../../../assets/svg';
import AppText from '../../text/AppText';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const ConfirmationModal: React.FC<Props> = ({modal}) => {
  const {styles} = useConfirmationStyle();
  const icon = modal.getParam('icon', '');
  const Title = modal.getParam('title', 'Are you sure?');
  const titleStyle = modal.getParam('titleStyle', {});
  const subTitle = modal.getParam('subTitle', '');

  const SvgIcon = Svg[icon as keyof typeof Svg];

  return (
    <View style={styles.modalView}>
      <View style={styles.content}>
        {icon ? <SvgIcon /> : null}
        {typeof Title === 'string' ? (
          <AppText style={[styles.bodyText, titleStyle]}>{Title}</AppText>
        ) : (
          <Title />
        )}
        {subTitle ? (
          <AppText style={styles.bodySubTitle}>{subTitle}</AppText>
        ) : null}
      </View>
    </View>
  );
};

export default ConfirmationModal;
