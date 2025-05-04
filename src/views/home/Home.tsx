import React, { useCallback, useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import AppText from '../../components/text/AppText';
import { useHomeStyle } from './HomeStyle';
import useHome from './hooks/useHome';
import SvgButton from '../../components/svgButton/SvgButton';

const Home = () => {
    const {styles, colors} = useHomeStyle();
    const {navigation} = useHome();

    const header = useCallback(()=> {
        return (
            <View style={styles.header}>
                <AppText fontFamily={'semiBold'} style={styles.headerText}>Hi User</AppText>
                <SvgButton icon={'notificationIcon'} onPress={()=> {}} size={24} />
            </View>
        );
    }, []);

    useEffect(()=> {
        navigation.setOptions({
            header: header,
            headerShown: true,
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.toggleButton}>
                    <View style={styles.toggleSwitch}>
                        <AppText fontFamily={'semiBold'} style={styles.toggleText}>Sameti</AppText>
                    </View>
                    <View style={[styles.toggleSwitch, {backgroundColor: colors.lightBlue}]}>
                        <AppText fontFamily={'semiBold'} style={[styles.toggleText, {color: colors.darkGray}]}>VC</AppText>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
