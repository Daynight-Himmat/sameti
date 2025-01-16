import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../constants/routeConstant';
import { useEffect } from 'react';

const useSplash = ()=> {
    const navigation = useNavigation<NavigationProp<RootStackParamList, 'splash'>>();

    useEffect(()=> {
        setTimeout(()=> navigation.navigate('login', {}), 2000);
    }, [navigation]);

    return;
};

export default useSplash;
