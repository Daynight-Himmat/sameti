import {
  MarchantInfo,
  MarchantProductData,
} from '../../interfaces/marchantInterface';
import React from 'react';
import Svg from '../../assets/svg';
import AppText from '../text/AppText';
import { ProductPrice } from '../labelText/LabelText';
import AddToCartButton from '../button/AddToCartButton';
import { StyleProp, View, ViewStyle } from 'react-native';
import { WARNING } from '../../constants/stringConstants';
import { useProductDetailStyle } from './ProductDataStyle';

interface Props {
  vat?: boolean;
  token?: string;
  isLoading?: boolean;
  onCartPress?: () => void;
  item?: MarchantProductData;
  marchantInfo?: MarchantInfo;
  containerStyle?: StyleProp<ViewStyle>;
}

const ProductData = React.memo(
  ({
    item,
    vat,
    token,
    isLoading,
    onCartPress,
    marchantInfo,
    containerStyle,
  }: Props) => {
    const { styles, colors } = useProductDetailStyle();

    return (
      <View style={[styles.products, containerStyle]}>
        <AppText
          numberOfLines={1}
          fontFamily={'medium'}
          style={styles.productName}>
          {item?.productName}
        </AppText>
        <AppText numberOfLines={1} style={styles.productCode}>
          ({item?.productCode})
        </AppText>
        <View style={styles.rate}>
          <Svg.favIcon width={18} height={18} fill={colors.yellow} />
          <AppText numberOfLines={1} style={styles.rateText}>
            ({item?.ratingCount})
          </AppText>
        </View>
        <ProductPrice
          vat={vat}
          item={item}
          token={token}
          marchantInfo={marchantInfo}
        />
        {item?.availableStock ? (
          <AddToCartButton
            isLoading={isLoading}
            onPress={onCartPress ? onCartPress : () => {}}
          />
        ) : (
          <View style={styles.stockContainer}>
            <AppText fontFamily={'semiBold'} style={styles.availableStock}>
              {WARNING.unAvailableStock}
            </AppText>
          </View>
        )}
      </View>
    );
  },
);

export default ProductData;
