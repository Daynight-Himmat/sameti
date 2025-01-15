import Config from 'react-native-config';

type configKey = 'API_URL';

export const getEnvConfig = (key: configKey) => Config[key];
