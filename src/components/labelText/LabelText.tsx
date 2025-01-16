import {
  MarchantInfo,
  MarchantProductData,
  MarchantProductDetails,
} from '../../interfaces/marchantInterface';
import React from 'react';
import { FONTS } from '../../styles/typography';
import { useLabelStyle } from './LabelTextStyle';
import { onShowPrice } from '../../helpers/helper';
import AppText from '../../components/text/AppText';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';
import { RootStackParamList } from '../../constants/routeConstant';

interface Props {
  value?: string;
  price?: number;
  keyText?: string;
  otherValue?: string;
  numberOrLine?: number;
  keyStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  comeFrom?: keyof RootStackParamList;
  labelFontFamily?: keyof typeof FONTS;
  valueFontFamily?: keyof typeof FONTS;
  labelContainer?: StyleProp<ViewStyle>;
  otherValueStyle?: StyleProp<TextStyle>;
}

const LabelText = React.memo(
  ({
    value,
    keyText,
    keyStyle,
    valueStyle,
    otherValue,
    numberOrLine,
    labelContainer,
    valueFontFamily,
    labelFontFamily,
    otherValueStyle,
  }: Props) => {
    const { styles } = useLabelStyle();

    return (
      <View style={[styles.labelContainer, labelContainer]}>
        <AppText
          numberOfLines={3}
          fontFamily={labelFontFamily || 'regular'}
          style={[styles.key, keyStyle]}>
          {keyText || ''}
          {value && (
            <AppText
              fontFamily={valueFontFamily || 'regular'}
              style={[styles.key, keyStyle]}>
              {' : '}
              <AppText
                numberOfLines={numberOrLine && numberOrLine}
                fontFamily={valueFontFamily || 'regular'}
                style={[styles.labelText, valueStyle]}>
                {value || ''}
              </AppText>{' '}
              <AppText
                fontFamily={valueFontFamily || 'regular'}
                style={[styles.labelText, otherValueStyle]}>
                {otherValue || ''}
              </AppText>
            </AppText>
          )}
        </AppText>
      </View>
    );
  },
);

const PriceLabel = React.memo(
  ({ keyText, price, comeFrom, ...rest }: Props) => {
    const { styles } = useLabelStyle();
    const condition = price !== undefined && price !== 0;
    return comeFrom === 'productDetails' ? (
      condition && (
        <LabelText
          numberOrLine={1}
          keyText={keyText}
          valueFontFamily={'medium'}
          keyStyle={styles.priceKey}
          labelFontFamily={'semiBold'}
          value={onShowPrice(price)}
          valueStyle={styles.valueKey}
          labelContainer={styles.labelPriceContainer}
          {...rest}
        />
      )
    ) : (
      <LabelText
        keyText={keyText}
        numberOrLine={1}
        valueFontFamily={'medium'}
        labelFontFamily={'semiBold'}
        value={onShowPrice(price || 0)}
        labelContainer={styles.labelPriceContainer}
        keyStyle={condition ? styles.priceKey : styles.spaceText}
        valueStyle={condition ? styles.valueKey : styles.spaceText}
        {...rest}
      />
    );
  },
);

const ProductPrice = React.memo(
  ({
    item,
    token,
    comeFrom,
    vat = false,
    marchantInfo,
  }: {
    vat?: boolean;
    token?: string;
    marchantInfo?: MarchantInfo;
    comeFrom?: keyof RootStackParamList;
    item?: MarchantProductData | MarchantProductDetails;
  }) => {
    const { styles } = useLabelStyle();

    const price = !vat
      ? item?.originalPriceDisplay
      : item?.originalPriceDisplayWithVAT;

    const dpsPrice = !vat ? item?.dpsDisplay : item?.dpsDisplayWithVAT;

    const t4uPrice = !vat ? item?.t4UDisplay : item?.t4UDisplayWithVAT;

    const trustmarkPrice = !vat
      ? item?.trustmarkDisplay
      : item?.trustmarkDisplayWithVAT;

    const discountPrice = !vat
      ? item?.discountedPriceDisplay
      : item?.discountedPriceDisplayWithVAT;

    const spacialPrice = !vat ? item?.specialPrice : item?.specialPriceWithVAT;

    return (
      <>
        <PriceLabel
          keyText="Price"
          comeFrom={comeFrom}
          otherValueStyle={styles.discountPrice}
          otherValue={discountPrice ? `(${price})` : ''}
          price={discountPrice ? discountPrice : price && price}
        />
        {spacialPrice ? (
          <PriceLabel
            keyText="Price for you"
            comeFrom={comeFrom}
            price={spacialPrice && spacialPrice}
          />
        ) : (
          <></>
        )}
        {token && (
          <>
            {marchantInfo?.priceLink?.isDPSApproved && (
              <PriceLabel
                comeFrom={comeFrom}
                keyText="DPS"
                price={dpsPrice && dpsPrice}
              />
            )}
            {marchantInfo?.priceLink?.isT4UApproved && (
              <PriceLabel
                comeFrom={comeFrom}
                keyText="T4U"
                price={t4uPrice && t4uPrice}
              />
            )}
            {marchantInfo?.priceLink?.isTrustMarkApproved && (
              <PriceLabel
                keyText="Trustmark"
                comeFrom={comeFrom}
                price={trustmarkPrice && trustmarkPrice}
              />
            )}
          </>
        )}
      </>
    );
  },
);

export { LabelText, PriceLabel, ProductPrice };
