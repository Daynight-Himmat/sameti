import React from 'react';
import { View } from 'react-native';
import AppText from '../../text/AppText';
import useChatBottom from './hooks/useChatBottom';
import { closeModal } from '../../../helpers/utils';
import { MODALS } from '../../../constants/routeConstant';
import FooterButton from '../../footerButton/FooterButton';
import { PLACEHOLDER } from '../../../constants/stringConstants';
import AppDropdownController from '../../dropdown/DropdownController';
import AppTextControlInput from '../../textInput/AppTextInputController';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}
const ChatBottom: React.FC<Props> = ({ modal }) => {
  const { styles, colors, merchants, control, onSubmitMessage, handleSubmit } =
    useChatBottom({
      modal: modal,
    });

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <AppText fontFamily={'semiBold'} style={styles.label}>
          New Chat
        </AppText>
      </View>
      <View style={styles.subContainer}>
        <AppDropdownController
          data={merchants}
          control={control}
          valueField={'value'}
          labelField={'text'}
          placeholder={'select marchant'}
          controllerName={'chatUserId'}
          activeColor={colors.veryLightGray}
          containerStyle={styles.containerDrop}
          labelTextStyle={styles.labelTextStyle}
          label={'Please select merchant you like to talk to?'}
        />
        <AppTextControlInput
          multiline
          control={control}
          label={'Message'}
          verticalAlign="top"
          controllerName={'message'}
          textStyle={styles.chatText}
          labelStyle={styles.labelTextStyle}
          placeholder={PLACEHOLDER.chatMessage}
        />
      </View>
      <View style={styles.footer}>
        <FooterButton
          borderRadius={26}
          cancelLabel="Cancel"
          confirmLabel="Send Message"
          onPressConfirm={handleSubmit(onSubmitMessage)}
          onPressCancel={() => closeModal(MODALS.chatBottom)}
        />
      </View>
    </View>
  );
};

export default ChatBottom;
