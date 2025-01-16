import { useMemo } from 'react';
import { SPACING } from '../../styles';
import { I18nManager, StyleSheet } from 'react-native';
import { useResponsiveScreen, useTheme } from '../../hooks';

interface dropdownStyleProps {
  isOpen?: boolean;
}

export const useDropdownStyle = ({}: dropdownStyleProps) => {
  const { colors } = useTheme();
  const { hp, wp } = useResponsiveScreen();

  const styles = useMemo(() => {
    return StyleSheet.create({
      mainWrap: {
        justifyContent: 'center',
      },
      mainContainer: {
        marginBottom: hp(SPACING?.s4),
      },
      container: {
        flexShrink: 1,
        borderWidth: 0.5,
        borderColor: '#EEEEEE',
        shadowColor: colors.black,
        backgroundColor: colors.white,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        elevation: 2,
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
      flex1: {
        flex: 1,
      },
      flexShrink: {
        flexShrink: 1,
      },
      wrapTop: {
        justifyContent: 'flex-end',
      },
      dropdown: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      },
      title: {
        fontSize: 16,
        marginVertical: hp(SPACING.s6),
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
      item: {
        padding: 17,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      },
      textItem: {
        flex: 1,
        fontSize: 16,
        writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
      },
      icon: {
        width: 20,
        height: 20,
      },
      input: {
        margin: 6,
        height: 45,
        borderWidth: 0.5,
        borderColor: '#DDDDDD',
        marginBottom: hp(SPACING.s8),
        paddingHorizontal: wp(SPACING.s8),
      },
      fullScreen: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      labelContainer: {
        marginBottom: hp(SPACING.s6),
        paddingVertical: hp(SPACING.s6),
      },
      labelTextStyle: {
        color: colors.black,
      },
      error: {
        color: colors.toastError,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.toastError,
      },
      dropdownContainer: {
        height: 50,
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: hp(SPACING.s10),
        borderColor: colors.grayishBlue,
        paddingHorizontal: wp(SPACING.s10),
      },
      labelText: {
        color: colors.darkGrayishBlue,
      },
      dropdownText: {
        fontSize: 14,
        color: colors.gray,
      },
      itemContainer: {
        fontSize: 14,
        color: colors.grayishBlue,
      },
      selectionText: {
        fontSize: 14,
        color: colors.gray,
      },
    });
  }, [colors, hp, wp]);

  return {
    styles,
    colors,
  };
};
