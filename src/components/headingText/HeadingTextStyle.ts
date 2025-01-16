import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { FONTS, SHADOW, SPACING } from '../../styles';
import { useTheme, useResponsiveScreen } from '../../hooks';

interface Props {
  paddingHorizontal?: number;
}

export const useHeadingTextStyle = ({ paddingHorizontal }: Props) => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        paddingTop: hp(SPACING.s6),
        paddingBottom: hp(SPACING.s4),
        paddingHorizontal: wp(paddingHorizontal || SPACING.none),
      },
      label: {
        fontSize: 16,
        ...SHADOW.shadow3,
        color: colors.gray,
        fontFamily: FONTS.semiBold,
      },
    });
  }, [colors, hp, paddingHorizontal, wp]);

  return { styles, colors };
};
