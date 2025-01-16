import { useMemo } from 'react';
import { useTheme } from '../hooks';
import { FONTS } from './typography';

export const useCustomStyle = () => {
  const { colors } = useTheme();
  const customStyle = useMemo(() => {
    return {
      labelSize: 12,
      stepStrokeWidth: 2,
      stepIndicatorSize: 30,
      labelColor: colors.gray,
      separatorStrokeWidth: 3,
      currentStepStrokeWidth: 3,
      currentStepIndicatorSize: 35,
      stepIndicatorLabelFontSize: 12,
      labelFontFamily: FONTS.regular,
      currentStepLabelColor: colors.green,
      separatorFinishedColor: colors.green,
      stepStrokeCurrentColor: colors.green,
      currentStepIndicatorLabelFontSize: 12,
      stepStrokeFinishedColor: colors.green,
      stepIndicatorCurrentColor: colors.white,
      stepIndicatorFinishedColor: colors.green,
      stepIndicatorLabelFinishedColor: colors.gray,
      stepIndicatorLabelCurrentColor: colors.green,
      stepStrokeUnFinishedColor: colors.grayishBlue,
      separatorUnFinishedColor: colors.veryLightGray,
      stepIndicatorLabelUnFinishedColor: colors.gray,
      stepIndicatorUnFinishedColor: colors.veryLightGray,
    };
  }, [colors]);

  return {
    customStyle,
    colors,
  };
};
