import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useResponsiveScreen, useTheme} from '../../hooks';

interface props {
  backgroundColor: string | undefined;
}

export const useAppButtonStyle = ({backgroundColor}: props) => {
  const {colors} = useTheme();
  const {hp, wp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      button: {
        backgroundColor: backgroundColor || colors.primary,
        width: wp(200),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp(12),
        paddingVertical: hp(12),
        borderRadius: 6,
      },
      label: {
        fontSize: 16,
        color: colors.white,
      },
    });
  }, [colors, backgroundColor, wp, hp]);

  return styles;
};
