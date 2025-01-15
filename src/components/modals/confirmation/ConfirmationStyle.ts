import {Platform, StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {SCREEN_WIDTH} from '../../../styles';
import {useResponsiveScreen} from '../../../hooks';

export const useConfirmationStyle = () => {
  const {wp, hp} = useResponsiveScreen();
  const isIos = Platform.OS === 'ios';
  const styles = useMemo(() => {
    return StyleSheet.create({
      modalView: {
        margin: 0,
        borderRadius: 20,
        width: isIos ? wp(SCREEN_WIDTH - 64) : wp(SCREEN_WIDTH - 48),
        paddingHorizontal: isIos ? wp(16) : wp(10),
      },
      content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: hp(20),
      },
      footerBlock: {
        marginVertical: 20,
      },
      bodyText: {
        fontSize: hp(18),
        lineHeight: 20,
        textAlign: 'center',
      },
      bodySubTitle: {
        marginTop: hp(16),
        fontSize: hp(16),
        lineHeight: 18,
        textAlign: 'center',
      },
    });
  }, [isIos, wp, hp]);

  return {styles};
};
