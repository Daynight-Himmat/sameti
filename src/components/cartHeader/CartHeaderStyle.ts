import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { SHADOW, SPACING } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';

export const useCartHeaderStyle = () => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        borderRadius: 6,
        ...SHADOW.shadow3,
        justifyContent: 'center',
        backgroundColor: colors.white,
        marginVertical: hp(SPACING.s6),
      },
      cartContainer: {
        width: '100%',
        borderRadius: 6,
        justifyContent: 'center',
        marginBottom: hp(SPACING.s6),
        backgroundColor: colors.white,
      },
      branchLabelContainer: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      imageContainer: {
        width: '30%',
        height: '100%',
        resizeMode: 'contain',
        paddingLeft: wp(SPACING.s16),
        justifyContent: 'flex-start',
      },
      image: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        justifyContent: 'flex-start',
      },
      titleContainer: {
        width: '70%',
        paddingHorizontal: hp(SPACING.s16),
      },
      title: {
        fontSize: 16,
        color: colors.white,
      },
      noticeContainer: {
        paddingHorizontal: wp(SPACING.s16),
      },
      noticeText: {
        color: colors.white,
        paddingBottom: hp(SPACING.s16),
      },
    });
  }, [colors, wp, hp]);

  return {
    styles,
    colors,
  };
};
