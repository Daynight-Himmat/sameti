import React from 'react';
import Svg from '../../assets/svg';
import AppButton from './AppButton';
import { View } from 'react-native';
import { useAppButtonStyle } from './AppButtonStyle';

interface Props {
  title?: string;
  onPress: () => void;
  isLoading?: boolean;
  icon?: keyof typeof Svg;
}

const AddToCartButton = React.memo(
  ({ onPress, title, icon, isLoading }: Props) => {
    const { styles } = useAppButtonStyle({});

    return (
      <View style={styles.cartContainer}>
        <AppButton
          size={10}
          onPress={onPress}
          isLoading={isLoading}
          style={styles.cartButton}
          icon={icon ? icon : 'addIcon'}
          labelStyle={styles.cartButtonLabel}
          title={title ? title : 'Add to cart'}
        />
      </View>
    );
  },
);

export default AddToCartButton;
