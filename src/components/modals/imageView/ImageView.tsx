import React from 'react';
import Svg from '../../../assets/svg';
import { closeModal } from '../../../helpers/utils';
import { useImageViewStyle } from './ImageViewStyle';
import ImageSlider from '../../imageSlider/ImageSlider';
import { MODALS } from '../../../constants/routeConstant';
import { Pressable, SafeAreaView, View } from 'react-native';
import { UsableModalComponentProp, ModalfyParams } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const ImageView: React.FC<Props> = ({ modal }) => {
  const data = modal.getParam('data', []);
  const { styles, colors } = useImageViewStyle();

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.container}>
        <Pressable
          onPress={() => closeModal(MODALS.imageView)}
          style={styles.icon}>
          <Svg.clearIcon fill={colors.gray} />
        </Pressable>
        <ImageSlider data={data} height={'100%'} />
      </View>
    </SafeAreaView>
  );
};

export default ImageView;
