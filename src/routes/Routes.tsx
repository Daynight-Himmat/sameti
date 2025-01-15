import React, {useMemo} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/routeConstant';
import Login from '../views/login/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useTheme} from '../hooks';
import {Platform, StatusBar} from 'react-native';

const Auth = createNativeStackNavigator();
const App = createNativeStackNavigator();

const globalProps: any = global;

globalProps.currentScreen = '';

const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName={ROUTES.login}>
      <Auth.Screen
        name={ROUTES.login}
        component={Login}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};

// TODO: FUTURE SCOPRE
// const AppStack = () => {
//   return (
//     <App.Navigator>
//       <App.Screen
//         name={'app'}
//         component={Login}
//         options={{headerShown: false}}
//       />
//     </App.Navigator>
//   );
// };

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
        {/* <AppStack /> */}

        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Routes;
