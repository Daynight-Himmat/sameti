import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {useTheme} from '../hooks';
import React, {useMemo} from 'react';
import Login from '../views/login/Login';
import SignUp from '../views/signUp/SignUp';
import Splash from '../views/splash/Splash';
import {Platform, StatusBar} from 'react-native';
import { RootStackParamList } from '../constants/routeConstant';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgotPassword from '../views/forgot/Forgot';
import ChangePassword from '../views/changePassword/ChangePassword';
import Home from '../views/home/Home';
import CreateSameti from '../views/createSameti/CreateSameti';

const Auth = createNativeStackNavigator<RootStackParamList>();

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
        component={Home}
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
