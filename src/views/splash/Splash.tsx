import images from '../../assets/images';
import AppText from '../../components/text/AppText';
import React, { Image, SafeAreaView, View } from 'react-native';
import { APP_NAME } from '../../constants/constants';
import { useSplashStyle } from './SplashStyle';
import useSplash from './hooks/useSplash';

const Splash = () => {
  useSplash();
  const { styles } = useSplashStyle();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.iconContainer}>
          <Image source={images.appLogo} />
          <AppText fontFamily={'bold'} style={styles.appName}>
            {APP_NAME}
          </AppText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
