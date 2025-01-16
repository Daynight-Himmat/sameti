import React from 'react';
import AppText from '../text/AppText';
import { ColorValue, Image, View } from 'react-native';
import { useCartHeaderStyle } from './CartHeaderStyle';

interface Props {
  logo?: string;
  storeName?: string;
  noticeText?: string;
  children?: React.ReactNode;
  backGroundColor?: ColorValue;
}

const CartHeader = ({
  logo,
  children,
  storeName,
  noticeText,
  backGroundColor,
}: Props) => {
  const { styles, colors } = useCartHeaderStyle();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.cartContainer,
          { backgroundColor: backGroundColor || colors.red },
        ]}>
        <View style={styles.branchLabelContainer}>
          {logo && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: logo || '' }} style={styles.image} />
            </View>
          )}
          <View style={styles.titleContainer}>
            <AppText fontFamily={'semiBold'} style={styles.title}>
              {storeName || ''}
            </AppText>
          </View>
        </View>
        {noticeText && (
          <View style={styles.noticeContainer}>
            <AppText fontFamily={'medium'} style={styles.noticeText}>
              {noticeText}
            </AppText>
          </View>
        )}
      </View>
      {children}
    </View>
  );
};

export default CartHeader;
