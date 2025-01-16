import { View } from 'react-native';
import React, { useCallback } from 'react';
import AppButton from '../../button/AppButton';
import SvgButton from '../../svgButton/SvgButton';
import { closeModal } from '../../../helpers/utils';
import { PriceLabel } from '../../labelText/LabelText';
import HeadingText from '../../headingText/HeadingText';
import { MODALS } from '../../../constants/routeConstant';
import { useAddToCartSchemeStyle } from './AddToCartStyle';
import useAddToCartSchemePrice from './hooks/useAddToCartSchemePrice';
import { ModalfyParams, UsableModalComponentProp } from 'react-native-modalfy';

interface Props {
  modal: UsableModalComponentProp<ModalfyParams, keyof ModalfyParams>;
}

const AddToCartWithSchemes = ({ modal }: Props) => {
  const { styles } = useAddToCartSchemeStyle();
  const { items, marchantInfo, vatPrice, addToCartPress } =
    useAddToCartSchemePrice({
      modal: modal,
    });

  const renderAddToCart = useCallback(
    (type: string) => {
      return (
        <View style={styles.cartContainer}>
          <AppButton
            size={10}
            icon={'addIcon'}
            title="Add to cart"
            style={styles.cartButton}
            labelStyle={styles.cartButtonLabel}
            onPress={() => addToCartPress(type)}
          />
        </View>
      );
    },
    [styles, addToCartPress],
  );

  const renderPrice = useCallback(
    (key: any, price: any) => {
      return (
        <>
          <View style={styles.priceView}>
            {key === 'Retail' ? (
              <PriceLabel
                keyText={key}
                price={price}
                otherValue={
                  items?.discountedPriceDisplay
                    ? `(${
                        !vatPrice
                          ? items?.originalPriceDisplay
                          : items?.originalPriceDisplayWithVAT
                      })`
                    : undefined
                }
                otherValueStyle={styles.discountPrice}
              />
            ) : (
              <PriceLabel keyText={key} price={price} />
            )}
          </View>
        </>
      );
    },
    [items, styles, vatPrice],
  );

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <HeadingText headingKey="Add to cart" />
        <SvgButton
          size={14}
          icon={'clearIcon'}
          onPress={() => closeModal(MODALS.addToCartScheme)}
        />
      </View>
      <View style={styles.priceContainer}>
        {renderPrice(
          'Retail',
          items?.discountedPriceDisplay
            ? !vatPrice
              ? items?.discountedPriceDisplay
              : items?.discountedPriceDisplayWithVAT
            : !vatPrice
            ? items?.originalPriceDisplay
            : items?.originalPriceDisplayWithVAT,
        )}
        {renderAddToCart('Retail')}
      </View>
      {items?.specialPrice ? (
        <View style={styles.priceContainer}>
          {renderPrice(
            'Price for you',
            !vatPrice ? items?.specialPrice : items?.specialPriceWithVAT,
          )}
          {renderAddToCart('SpecialPrice')}
        </View>
      ) : (
        <></>
      )}
      {marchantInfo?.priceLink?.isDPSApproved &&
        (items?.dpsDisplay ? (
          <View style={styles.priceContainer}>
            {renderPrice(
              'DPS',
              !vatPrice ? items?.dpsDisplay : items?.dpsDisplayWithVAT,
            )}
            {renderAddToCart('DPS')}
          </View>
        ) : (
          <></>
        ))}
      {marchantInfo?.priceLink?.isT4UApproved &&
        (items?.t4UDisplay ? (
          <View style={styles.priceContainer}>
            {renderPrice(
              'T4U',
              !vatPrice ? items?.t4UDisplay : items?.t4UDisplayWithVAT,
            )}
            {renderAddToCart('T4U')}
          </View>
        ) : (
          <></>
        ))}
      {marchantInfo?.priceLink?.isTrustMarkApproved &&
        (items?.trustmarkDisplay ? (
          <View style={styles.priceContainer}>
            {renderPrice(
              'Trustmark',
              !vatPrice
                ? items?.trustmarkDisplay
                : items?.trustmarkDisplayWithVAT,
            )}
            {renderAddToCart('Trustmark')}
          </View>
        ) : (
          <></>
        ))}
    </View>
  );
};

export default AddToCartWithSchemes;
