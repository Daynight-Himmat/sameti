import { useForm } from 'react-hook-form';
import { closeModal } from '../../../../helpers/utils';
import { useChatBottomStyle } from '../ChatBottomStyle';
import { MODALS } from '../../../../constants/routeConstant';
import { addNewChatSchema } from '../../../../helpers/yupHelper';
import {
  useLazyChatQuery,
  useNewChatMutation,
} from '../../../../services/chatService';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';
import { useEffect } from 'react';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const useChatBottom = ({ modal }: Props) => {
  const [getChat, { data: getChatResponse }] = useLazyChatQuery();
  const navigation = modal.getParam('navigation', {});

  useEffect(() => {
    getChat();
  }, [getChat]);

  const { styles, colors } = useChatBottomStyle();
  const [newChatCreate] = useNewChatMutation();

  const { control, handleSubmit, getValues } = useForm<any, any>({
    resolver: addNewChatSchema,
    mode: 'onBlur',
  });

  const onSubmitMessage = () => {
    closeModal(MODALS.chatBottom);
    const params = {
      ...getValues(),
      chatUserType: getChatResponse?.data?.userType || '',
    };
    newChatCreate(params).then(res => {
      if (res?.data?.status === 200) {
        navigation?.navigate?.('chatList', {
          screen: 'chat',
          params: {
            chatData: res?.data?.data,
          },
        });
      }
    });
  };

  return {
    control,
    styles,
    colors,
    handleSubmit,
    onSubmitMessage,
    merchants: getChatResponse?.data?.merchants || [],
  };
};

export default useChatBottom;
