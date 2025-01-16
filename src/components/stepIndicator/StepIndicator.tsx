import React from 'react';
import Svg from '../../assets/svg';
import { SvgProps } from 'react-native-svg';
import { useTheme } from '../../hooks';

interface Props {
  stepStatus: any;
  position: number;
  getIcon: (position: number) => keyof typeof Svg;
}

const RenderIndicator = React.memo(
  ({ position, stepStatus, getIcon }: Props) => {
    const { colors } = useTheme();
    const fill =
      stepStatus === 'finished'
        ? colors.white
        : stepStatus === 'current'
        ? colors.green
        : colors.gray;
    const height = 12;
    const width = 12;
    const props = { fill, height, width };
    const SvgIcon: React.FC<SvgProps> = Svg[getIcon(position)];
    return <SvgIcon {...props} />;
  },
);

export default RenderIndicator;
