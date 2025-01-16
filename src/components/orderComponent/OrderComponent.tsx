import { View } from 'react-native';
import React, { useCallback } from 'react';
import { LabelText } from '../labelText/LabelText';
import HeadingText from '../headingText/HeadingText';
import { dateTimeSlashFormat } from '../../helpers/helper';
import { OrderData } from '../../interfaces/orderInterface';
import { useOrderComponentStyle } from './OrderComponentStyle';

interface Props {
  orderTrackData?: OrderData;
  type: 'Ship To' | 'Bill To' | 'Contact' | 'Store' | 'Branch';
}

const RenderOrderData = React.memo(({ type, orderTrackData }: Props) => {
  const { styles } = useOrderComponentStyle();

  const joinValues = (values: (string | undefined)[], separator = ', ') => {
    return values.filter(Boolean).join(separator);
  };

  const shipAddress = joinValues([
    orderTrackData?.shippingAddress,
    orderTrackData?.addressInformation,
    orderTrackData?.city,
    orderTrackData?.state,
    orderTrackData?.country,
    orderTrackData?.postcode,
  ]);

  const billAddress = joinValues([
    orderTrackData?.billingAddressLine1,
    orderTrackData?.billingAddressLine2,
    orderTrackData?.billingCity,
    orderTrackData?.billingState,
    orderTrackData?.billingCountry,
    orderTrackData?.billingPostcode,
  ]);

  const address = type === 'Ship To' ? shipAddress : billAddress;

  const headingText = () => {
    switch (type) {
      case 'Ship To':
        return joinValues(
          [orderTrackData?.customerFirstName, orderTrackData?.customerLastName],
          ' ',
        );
      case 'Bill To':
        return joinValues(
          [orderTrackData?.billingFirstName, orderTrackData?.billingLastName],
          ' ',
        );
      case 'Contact':
        return orderTrackData?.contactName;
    }
  };

  const postalCode =
    type === 'Ship To'
      ? orderTrackData?.postcode
      : orderTrackData?.billingPostcode;

  const email =
    type === 'Ship To'
      ? orderTrackData?.customerEmail
      : type === 'Bill To'
      ? orderTrackData?.billingEmail
      : orderTrackData?.contactEmail;

  const shippingContact = joinValues([
    orderTrackData?.customerPhone,
    orderTrackData?.customerAlternatePhone,
  ]);
  const billingContact = joinValues([
    orderTrackData?.billingMobileNumber,
    orderTrackData?.billingTelephone,
  ]);
  const contactCustomer = joinValues([
    orderTrackData?.contactPhone,
    orderTrackData?.contactAlternatePhone,
  ]);

  const contact =
    type === 'Ship To'
      ? shippingContact
      : type === 'Bill To'
      ? billingContact
      : contactCustomer;

  const contactType = orderTrackData?.contactType || '';
  const referNumber = orderTrackData?.customerReferenceNumber || '';

  const shippingDate =
    orderTrackData?.requestedShippingDate &&
    dateTimeSlashFormat(orderTrackData?.requestedShippingDate);
  const orderPlace =
    orderTrackData?.orderDate && dateTimeSlashFormat(orderTrackData?.orderDate);

  const renderLabel = useCallback(
    (key: string, value: string) => (
      <LabelText
        keyText={key}
        value={value}
        keyStyle={styles.keyText}
        valueStyle={styles.valueText}
      />
    ),
    [styles],
  );

  return (
    <View style={styles.detailContainer}>
      {type !== 'Store' && type !== 'Branch' && (
        <HeadingText headingKey={type} headingText={headingText() || ''} />
      )}

      {type === 'Branch' && (
        <>
          <HeadingText
            headingKey={type}
            headingText="This Order is Click and Collect"
          />
          {renderLabel('Branch Name', orderTrackData?.branchName || '')}
          {renderLabel('Branch Code', orderTrackData?.branchCode || '')}
        </>
      )}

      {type === 'Store' && (
        <>
          {renderLabel('Order Id', `${orderTrackData?.orderId}` || '')}
          {orderPlace && renderLabel('Order placed on', orderPlace)}
          {referNumber &&
            renderLabel('Customer Reference / Order Number', referNumber)}
          {shippingDate && renderLabel('Requested Shipping Date', shippingDate)}
        </>
      )}

      {type !== 'Contact' && type !== 'Store' && type !== 'Branch' && (
        <>
          {renderLabel('Address', address)}
          {renderLabel('Postal Code', postalCode || '')}
        </>
      )}

      {type === 'Contact' && renderLabel('Contact Type', contactType)}
      {type !== 'Store' &&
        type !== 'Branch' &&
        renderLabel('Email', email || '')}
      {type !== 'Store' &&
        type !== 'Branch' &&
        renderLabel('Phone', contact || '')}

      {type === 'Ship To' &&
        orderTrackData?.driverNote &&
        renderLabel('Driver Note', orderTrackData?.driverNote || '')}
    </View>
  );
});

export { RenderOrderData };
