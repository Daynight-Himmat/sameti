import AppText from '../text/AppText';
import SvgButton from '../svgButton/SvgButton';
import React, { FunctionComponent } from 'react';
import { useWelComeLabelStyle } from './WelComLabelStyle';
import { TextStyle, View, ViewStyle } from 'react-native';
import { RootStackParamList } from '../../constants/routeConstant';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface Props {
  label?: string;
  message?: string;
  iconColor?: string;
  isAppLogo?: boolean;
  onPress?: () => void;
  isBackPress?: boolean;
  labelStyle?: TextStyle;
  subLabelStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const WelcomeLabel: FunctionComponent<Props> = ({
  label,
  message,
  onPress,
  iconColor,
  labelStyle,
  subLabelStyle,
  isAppLogo = false,
  isBackPress = true,
  containerStyle = {},
}) => {
  const { styles, colors } = useWelComeLabelStyle();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const onBackPress = () => (isBackPress ? navigation.goBack() : {});

  return (
    <View style={[styles.iconContainer, containerStyle]}>
      {isBackPress && (
        <SvgButton
          size={18}
          icon={'backIcon'}
          style={styles.icon}
          onPress={onPress ? onPress : onBackPress}
          iconColor={iconColor ? iconColor : colors.black}
        />
      )}
      {isAppLogo && (
        <SvgButton size={120} icon={'appLogo'} style={styles?.logo} />
      )}
      <View style={styles.welcomeContainer}>
        <AppText fontFamily={'semiBold'} style={[styles.label, labelStyle]}>
          {label || ''}
        </AppText>
        <AppText style={[styles.subLabel, subLabelStyle]}>
          {message || ''}
        </AppText>
      </View>
    </View>
  );
};

export default WelcomeLabel;
