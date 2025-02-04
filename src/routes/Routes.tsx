import {
  useRoute,
  RouteProp,
  NavigationContainer,
  useNavigationContainerRef,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import Svg from '../assets/svg';
import { FONTS } from '../styles';
import {useTheme} from '../hooks';
import React, {useCallback, useMemo} from 'react';
import Home from '../views/home/Home';
import Login from '../views/login/Login';
import SignUp from '../views/signUp/SignUp';
import Splash from '../views/splash/Splash';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import ForgotPassword from '../views/forgot/Forgot';
import CreateSameti from '../views/createSameti/CreateSameti';
import { RootStackParamList } from '../constants/routeConstant';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChangePassword from '../views/changePassword/ChangePassword';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../views/profile/Profile';
import SvgButton from '../components/svgButton/SvgButton';

const Auth = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const globalProps: any = global;

globalProps.currentScreen = '';

const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName={'splash'}>
      <Auth.Screen
        name={'splash'}
        component={Splash}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'login'}
        component={Login}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'forgot'}
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'signUp'}
        component={SignUp}
        options={{headerShown: false}}
      />
       <Auth.Screen
        name={'changePassword'}
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'dashboard'}
        component={BottomTab}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name={'createSameti'}
        component={CreateSameti}
        options={{headerShown: true, headerTitle: 'Create Sameti'}}
      />
    </Auth.Navigator>
  );
};

const getIcon = (routeName: keyof RootStackParamList) => {
  switch (routeName) {
    case 'home':
      return Svg.homeIcon;
    case 'search':
      return Svg.searchIcon;
    case 'chatList':
      return Svg.chatIcon;
    case 'cart':
      return Svg.cartIcon;
    case 'profile':
      return Svg.personIcon;
  }
};

const BottomTab = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'dashboard'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList, 'dashboard'>>();
  const getTabBarIcon = (
    routeName: keyof RootStackParamList,
    focused: boolean,
    color: string,
  ) => {
    const SvgImage: any = getIcon(routeName);
    return <SvgImage fill={color} />;
  };
  const { colors } = useTheme();

  const fabButton = useCallback(() => (
    <SvgButton isFab onPress={()=> navigation.navigate('createSameti')} iconColor={'white'} icon={'plusIcon'} style={styles.fabButton} />
  ), [])

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.gray,
        headerLeftLabelVisible: false,
        headerTitleStyle: {
          fontFamily: FONTS.medium,
        },
        headerTitleAlign: 'center',
        tabBarStyle: {
          backgroundColor: colors.white,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color }) =>
          getTabBarIcon(route.name, focused, color),
        tabBarLabelStyle: {
          fontFamily: FONTS.medium,
        },
      })}>
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
          name={'createSameti'}
          component={CreateSameti}
          options={{
            tabBarButton: () => fabButton(),
          }}
        />

      <Tab.Screen
        name={'profile'}
        component={Profile}
        initialParams={{
          params: {
            comeFrom: params?.comeFrom as keyof RootStackParamList,
          },
        }}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};


const Routes = () => {
  const navigationRef = useNavigationContainerRef();

  const {mode} = useTheme();
  const barStyle = useMemo(
    () => (mode === 'light' ? 'dark-content' : 'light-content'),
    [mode],
  );

  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' ? (
        <StatusBar translucent barStyle={barStyle} />
      ) : null}
      <NavigationContainer ref={navigationRef}>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;


const styles = StyleSheet.create({
  fabButton: {
      backgroundColor: 'black',
      borderRadius: 100,
      position: 'relative',
      alignItems: 'center',
      alignSelf: 'center',
      bottom: 25,
      zIndex: 999,
      left: 0,
    }
});