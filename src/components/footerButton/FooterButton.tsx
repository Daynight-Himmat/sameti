import React from 'react';
import AppButton from '../button/AppButton';
import { View, ViewStyle } from 'react-native';
import { useFooterButtonStyle } from './FooterButtonStyle';

interface Props {
  height?: number;
  cancelLabel?: string;
  confirmLabel?: string;
  borderRadius?: number;
  cancelStyle?: ViewStyle;
  confrimStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onPressConfirm: () => void;
  onPressCancel?: () => void | undefined;
}

const FooterButton = React.memo(
  ({
    height,
    borderRadius,
    cancelLabel,
    cancelStyle,
    confirmLabel,
    confrimStyle,
    containerStyle,
    onPressCancel,
    onPressConfirm,
  }: Props) => {
    const styles = useFooterButtonStyle({
      height,
      borderRadius,
      onPressCancel,
    });
    return (
      <View style={[styles.container, containerStyle]}>
        {!!onPressCancel && (
          <AppButton
            title={cancelLabel}
            onPress={onPressCancel}
            labelStyle={styles.label}
            style={[styles.button, cancelStyle]}
          />
        )}
        <AppButton
          title={confirmLabel}
          onPress={onPressConfirm}
          labelStyle={styles.label}
          style={[styles.button, styles.confirmButton, confrimStyle]}
        />
      </View>
    );
  },
);

export default FooterButton;
