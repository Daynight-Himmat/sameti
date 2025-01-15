import React from 'react';
import {StyleSheet} from 'react-native';
import {AppContext, AppProvider} from './context/AppContext';
import store from './redux/store';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import Routes from './routes/Routes';
import './helpers/api';
import {DEFAULT_COLORS} from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const globalProps: any = global;

const App = () => {
  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <Provider store={store}>
        <AppProvider>
          <AppContext.Consumer>
            {func => {
              globalProps.props = func;
              return (
                <>
                  <Routes />
                </>
              );
            }}
          </AppContext.Consumer>
        </AppProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DEFAULT_COLORS.white,
  },
  rootContainer: {
    flex: 1,
  },
});

export default App;
