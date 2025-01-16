import {
  MarchantInfo,
  RelatedProductList,
  MarchantProductData,
} from '../../interfaces/marchantInterface';
import React from 'react';
import AppText from '../text/AppText';
import CustomImage from '../Image/ImageContainer';
import { PriceLabel } from '../labelText/LabelText';
import ProductData from '../productData/ProductData';
import AddToCartButton from '../button/AddToCartButton';
import { useProductGridCartStyle } from './ProductGridCartStyle';
import { Pressable, StyleProp, View, ViewStyle } from 'react-native';

interface ProductGridInterface {
  vat?: boolean;
  token?: string;
  isLoading: boolean;
  installer?: boolean;
  type: 'list' | 'grid';
  onCartPress?: () => void;
  item?: MarchantProductData;
  onProductPress?: () => void;
  marchantInfo?: MarchantInfo;
  onInstallerPress?: () => void;
}

interface RelatedGridInterface {
  vat?: boolean;
  onCartPress?: () => void;
  item?: RelatedProductList;
  onProductPress?: () => void;
  productContainer?: StyleProp<ViewStyle>;
}

const ProductGridCart = React.memo(
  ({
    vat,
    type,
    item,
    token,
    isLoading,
    onCartPress,
    marchantInfo,
    onProductPress,
    onInstallerPress,
  }: ProductGridInterface) => {
    const { styles } = useProductGridCartStyle();

    const mainContainer =
      type === 'list'
        ? styles?.productListContainer
        : styles.productGridContainer;

    const subContainer =
      type === 'list'
        ? styles.productListSubContainer
        : styles?.productGridSubContainer;

    const imageContainer =
      type === 'list' ? styles?.imageListContainer : styles?.imageGridContainer;

    return (
      <View style={mainContainer}>
        <Pressable style={subContainer} onPress={onProductPress}>
          <CustomImage
            source={item?.imageUrl}
            style={imageContainer}
            clintUrl={item?.halloaClientUrl}
            onInstallerPress={onInstallerPress}
          />
          <ProductData
            vat={vat}
            item={item}
            token={token}
            isLoading={isLoading}
            onCartPress={onCartPress}
            marchantInfo={marchantInfo}
          />
        </Pressable>
      </View>
    );
  },
);

const RelatedGridCart = React.memo(
  ({ item, onProductPress, productContainer }: RelatedGridInterface) => {
    const { styles } = useProductGridCartStyle();

    return (
      <View style={[styles.productGridContainer, productContainer]}>
        <Pressable
          style={styles.productGridSubContainer}
          onPress={onProductPress}>
          <CustomImage
            source={item?.productImageUrl}
            style={styles?.imageGridContainer}
          />
          <View style={styles.products}>
            <AppText
              numberOfLines={1}
              fontFamily={'medium'}
              style={styles.productName}>
              {item?.productName}
            </AppText>
            <AppText numberOfLines={1} style={styles.productCode}>
              ({item?.productCode})
            </AppText>
            <View>
              <PriceLabel
                keyText="Price"
                comeFrom={'productDetails'}
                otherValueStyle={styles.discountPrice}
                otherValue={
                  item?.discountedPrice ? `(${item?.originalPrice})` : ''
                }
                price={
                  item?.discountedPrice
                    ? item?.discountedPrice
                    : item?.originalPrice
                }
              />
            </View>
            <AddToCartButton
              icon={'addToCart'}
              title="Order Now"
              onPress={onProductPress ? onProductPress : () => {}}
            />
          </View>
        </Pressable>
      </View>
    );
  },
);

export { ProductGridCart, RelatedGridCart };
