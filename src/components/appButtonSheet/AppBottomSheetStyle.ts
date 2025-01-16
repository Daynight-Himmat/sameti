import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { DEFAULT_COLORS } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SCREEN_WIDTH, SHADOW, SPACING } from '../../styles';

interface props {
  editable?: boolean;
}

export const useAppButtonSheetStyle = ({ editable = true }: props) => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        ...SHADOW.shadow0,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: !editable ? 0.5 : 1,
        backgroundColor: DEFAULT_COLORS.white,
      },
      margin: {
        marginBottom: hp(SPACING.s10),
      },
      rightIcon: {
        position: 'absolute',
        right: wp(SPACING.s20),
      },
      error: {
        textAlign: 'left',
        paddingTop: hp(SPACING.s4),
        alignSelf: 'flex-start',
        color: colors.toastError,
      },
      label: {
        color: colors.primary,
        marginBottom: hp(SPACING.s12),
        alignSelf: 'flex-start',
        marginTop: hp(SPACING.s10),
      },
      required: {
        color: colors.toastError,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.toastError,
      },
      prefixTextStyles: {
        color: colors.black,
        marginEnd: wp(SPACING.s4),
        textAlignVertical: 'center',
        alignSelf: 'center',
      },
      prefixContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      floatingLabel: {
        top: hp(-10),
        position: 'absolute',
        left: wp(SPACING.s12),
        backgroundColor: colors.white,
        paddingHorizontal: wp(SPACING.s6),
      },
      labelText: {
        color: colors.darkGrayishBlue,
      },
      inputControlContainer: {
        height: 48,
        borderRadius: 6,
        borderWidth: 1,
        alignItems: 'center',
        marginVertical: hp(SPACING.s2),
        borderColor: colors.grayishBlue,
      },
      valueText: {
        color: colors.gray,
      },
      labelContainer: {
        height: 38,
        width: SCREEN_WIDTH / 1.7,
        justifyContent: 'center',
      },
      cancelIconContainer: {
        width: 18,
        height: 18,
        padding: 2,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
      },
      title: {
        color: colors.black,
        fontSize: 10,
      },
      titleContainer: {
        paddingHorizontal: wp(SPACING.s10),
        color: colors.black,
      },
      item: {
        borderWidth: 1,
        height: hp(25),
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.black,
        paddingRight: hp(SPACING.s2),
        marginBottom: hp(SPACING.s10),
        marginVertical: hp(SPACING.s6),
        paddingVertical: hp(SPACING.s4),
        marginHorizontal: hp(SPACING.s2),
      },
      inputStyle: {
        flexDirection: 'row',
      },
      valueContainer: {
        height: 38,
        paddingHorizontal: 10,
        width: SCREEN_WIDTH / 1.3,
        justifyContent: 'center',
      },
      noDataText: {
        fontSize: 14,
        color: colors.grayishBlue,
      },
      noDataContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      flatListContainer: {
        flexGrow: 1,
        paddingRight: wp(SPACING.s16),
      },
    });
  }, [editable, hp, wp, colors]);

  return { styles, colors };
};
