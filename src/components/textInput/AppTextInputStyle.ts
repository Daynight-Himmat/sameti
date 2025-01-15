import {PressableStateCallbackType, StyleSheet} from 'react-native';
import {useResponsiveScreen, useTheme} from '../../hooks';
import {SHADOW} from '../../styles';
import {ReactNode, useMemo} from 'react';
import {DEFAULT_COLORS} from '../../styles';

interface props {
  leftIcon?: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  editable?: boolean;
}

export const useAppTextInputStyle = ({leftIcon, editable = true}: props) => {
  const {colors} = useTheme();
  const {wp} = useResponsiveScreen();
  const styles = useMemo(() => {
    return StyleSheet.create({
      container: {
        width: '100%',
        ...SHADOW.shadow0,
        backgroundColor: DEFAULT_COLORS.white,
        opacity: !editable ? 0.5 : 1,
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      rightIcon: {
        position: 'absolute',
        right: 20,
      },
      error: {
        color: colors.toastError,
        textAlign: 'left',
        alignSelf: 'flex-start',
      },
      label: {
        color: colors.primary,
        marginBottom: 12,
        alignSelf: 'flex-start',
        marginTop: 10,
      },
      required: {
        color: colors.toastError,
      },
      errorWrapper: {
        borderWidth: 0.8,
        borderColor: colors.toastError,
      },
      textInputStyles: {
        color: colors.primary,
        padding: 0,
        paddingLeft: leftIcon ? 30 : 0,
      },
      prefixTextStyles: {
        color: colors.black,
        marginEnd: 4,
        textAlignVertical: 'center',
        alignSelf: 'center',
      },
      prefixContainer: {flexDirection: 'row', justifyContent: 'flex-start'},
      inputLabelContainer: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      compulsory: {
        color: DEFAULT_COLORS.blue,
      },
      leftIcon: {
        position: 'absolute',
        left: 20,
      },
      floatingLabel: {
        position: 'absolute',
        backgroundColor: colors.white,
        top: -10,
        left: 12,
        paddingHorizontal: 5,
      },
      percentage: {
        position: 'absolute',
        right: wp(12),
      },
    });
  }, [colors, wp, leftIcon, editable]);

  return styles;
};
