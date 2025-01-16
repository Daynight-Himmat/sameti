import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

interface Props {
  height?: number;
  borderRadius?: number;
  onPressCancel?: () => void;
}

export const useFooterButtonStyle = ({
  height,
  borderRadius,
  onPressCancel,
}: Props) => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: hp(SPACING?.s10),
        paddingHorizontal: wp(SPACING?.s16),
      },
      button: {
        height: height ? height : 48,
        elevation: 10,
        width: '47%',
        backgroundColor: colors.red,
        borderRadius: borderRadius ? borderRadius : 6,
      },
      label: {
        color: colors.white,
      },
      confirmButton: {
        backgroundColor: colors.green,
        width: onPressCancel ? '47%' : '100%',
      },
    });
  }, [hp, wp, colors, height, borderRadius, onPressCancel]);

  return styles;
};
