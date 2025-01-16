import { ReactNode, useMemo } from 'react';
import { DEFAULT_COLORS } from '../../styles';
import { useResponsiveScreen, useTheme } from '../../hooks';
import { SCREEN_WIDTH, SHADOW, SPACING } from '../../styles';
import { PressableStateCallbackType, StyleSheet } from 'react-native';

interface props {
  leftIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  rightIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  type?: any;
  editable?: boolean;
}

export const useAppTextInputStyle = ({
  leftIcon,
  type,
  editable = true,
}: props) => {
  const { colors } = useTheme();
  const { wp, hp } = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        ...SHADOW.shadow1,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: !editable ? 0.5 : 1,
        backgroundColor: DEFAULT_COLORS.white,
      },
      margin: {
        marginBottom: hp(SPACING.s10),
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        color: colors.red,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.toastError,
      },
      textInputStyles: {
        padding: 0,
        height: 48,
        width: '100%',
        color: colors.primary,
        paddingLeft: leftIcon ? wp(SPACING.s45) : wp(16),
        paddingRight: type === 'password' ? wp(50) : wp(16),
      },
      prefixTextStyles: {
        marginEnd: wp(4),
        color: colors.black,
        alignSelf: 'center',
        textAlignVertical: 'center',
      },
      prefixContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
      },
      inputLabelContainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      compulsory: {
        color: DEFAULT_COLORS.blue,
      },
      leftIcon: {
        position: 'absolute',
        left: wp(SPACING.s14),
      },
      floatingLabel: {
        position: 'absolute',
        top: hp(-10),
        left: wp(SPACING.s12),
        backgroundColor: colors.white,
        paddingHorizontal: wp(SPACING.s6),
      },
      percentage: {
        right: wp(SPACING.s12),
        position: 'absolute',
      },
      labelText: {
        color: colors.darkGrayishBlue,
      },
      inputControlContainer: {
        height: 48,
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        marginVertical: hp(SPACING.s2),
        borderColor: colors.grayishBlue,
      },
      inputText: {
        color: colors.black,
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
        padding: 2,
        height: 18,
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
      },
      title: {
        fontSize: 10,
        color: colors.black,
      },
      titleContainer: {
        color: colors.black,
        paddingHorizontal: wp(SPACING.s10),
      },
      item: {
        height: hp(25),
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: colors.black,
        paddingRight: hp(SPACING.s2),
        marginBottom: hp(SPACING.s10),
        marginVertical: hp(SPACING.s6),
        paddingVertical: hp(SPACING.s4),
        marginHorizontal: hp(SPACING.s2),
      },
      authDropDownContainer: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.white,
        marginTop: hp(SPACING.s14),
        justifyContent: 'flex-start',
        backgroundColor: colors.white,
      },
      authLabel: {
        fontSize: 16,
        color: colors.gray,
        alignSelf: 'flex-start',
        marginTop: hp(SPACING.s8),
        paddingHorizontal: wp(SPACING.s10),
      },
      inputStyle: {
        flexDirection: 'row',
      },
      valueContainer: {
        height: 38,
        justifyContent: 'center',
        width: SCREEN_WIDTH / 1.3,
        paddingHorizontal: wp(SPACING.s10),
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
  }, [editable, hp, wp, colors, leftIcon, type]);

  return { styles, colors };
};
