import React, {createContext, createRef, useState, useEffect} from 'react';
import {ModalProvider} from 'react-native-modalfy';
import Toaster from '../components/toaster/Toaster';
import ModalStack from '../routes/ModalStack';
import {storeData, getData} from '../helpers/localstorage';
import {ASYNC_STORE_VAR} from '../constants/constants';
import {useNetInfo} from '@react-native-community/netinfo';
import {closeNetworkWarning, openNetworkWarning} from '../helpers/utils';

export const AppContext = createContext({} as any);

export const AppProvider = ({children}: any) => {
  const toasterRef = createRef<any>();
  const {isConnected} = useNetInfo();
  const [theme, setThemeMode] = useState('light');

  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = async () => {
    const themeMode = await getData(ASYNC_STORE_VAR.themeMode);
    if (themeMode !== undefined && themeMode !== null) {
      setThemeMode(themeMode);
    } else {
      await storeData(ASYNC_STORE_VAR.themeMode, 'light');
    }
  };

  useEffect(() => {
    if (isConnected === false) {
      openNetworkWarning();
    }
    if (isConnected === true) {
      closeNetworkWarning();
    }
  }, [isConnected]);

  const showToaster = (args: Object) => {
    toasterRef.current.showToaster(args);
  };

  const setTheme = async (mode: string) => {
    setThemeMode(mode);
    await storeData(ASYNC_STORE_VAR.themeMode, mode);
  };

  return (
    <AppContext.Provider value={{theme, setTheme, showToaster}}>
      <ModalProvider stack={ModalStack}>{children}</ModalProvider>
      <Toaster ref={toasterRef} theme={theme} />
    </AppContext.Provider>
  );
};
