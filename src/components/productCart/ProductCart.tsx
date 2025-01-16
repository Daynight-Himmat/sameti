import {
  OrderDetailsModel,
  CancelOrderResponseModel,
} from '../../interfaces/orderInterface';
import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import AppText from '../text/AppText';
import { LabelText } from '../labelText/LabelText';
import { useProductCartStyle } from './ProductCartStyle';
import { dateSeqFormat, onShowPrice } from '../../helpers/helper';
import { RootStackParamList } from '../../constants/routeConstant';

interface Props {
  orderStatus?: string;
  comeFrom?: keyof RootStackParamList;
  valueStyle?: StyleProp<TextStyle>;
  item: OrderDetailsModel | CancelOrderResponseModel;
}

const ProductCart = React.memo(
  ({ item, orderStatus, valueStyle, comeFrom }: Props) => {
    const { styles } = useProductCartStyle();

    const priceType = [item?.priceFrameworkName, 'Price']
      .filter(Boolean)
      .join(' ');

    const requestShippingDate =
      item?.requestedShippingDate && dateSeqFormat(item?.requestedShippingDate);

    const render = (key?: string, value?: string) => (
      <LabelText keyText={key} value={value} labelFontFamily={'medium'} />
    );

    return (
      <View style={styles.renderRadioItem}>
        <AppText
          numberOfLines={2}
          fontFamily={'semiBold'}
          style={styles.labelText}>
          {item?.productName}
        </AppText>
        {render('Product Code', item?.productCode)}
        <>
          {comeFrom !== 'orderTrack' && (
            <>
              {render('Qantity', `${item?.quantity}`)}
              {render(priceType, onShowPrice(item?.price))}
              {render(
                'Tax',
                `${onShowPrice(item?.texPrice || 0)} (${
                  item?.vatName || 'VAT'
                })`,
              )}
            </>
          )}
        </>
        {render('Sub Total', onShowPrice(item?.subTotal))}
        {comeFrom === 'orderInvoice' &&
          render('Requested Shipping Date', requestShippingDate)}
        {comeFrom === 'orderReturn' && item?.orderRefundId && (
          <AppText fontFamily={'semiBold'} style={styles.returnedProduct}>
            Returned product
          </AppText>
        )}
        {comeFrom === 'orderTrack' ? (
          <LabelText
            keyText={'Status'}
            valueStyle={valueStyle}
            labelFontFamily={'medium'}
            valueFontFamily={'semiBold'}
            value={item?.cancelled ? 'Cancelled' : orderStatus}
          />
        ) : (
          item?.cancelled && (
            <AppText fontFamily={'semiBold'} style={styles.returnedProduct}>
              Cancelled
            </AppText>
          )
        )}
      </View>
    );
  },
);

export default ProductCart;
