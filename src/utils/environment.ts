import {Platform} from 'react-native';
import {getModel, getReadableVersion} from 'react-native-device-info';

const deviceModel = getModel();
const appVersion = getReadableVersion();
const agent =
  Platform.OS === 'ios'
    ? 'Trinkerr/1.6.4.176 CFNetwork/897.15 Darwin/17.5.0 (iPhone/6s iOS/11.3)'
    : 'Trinkerr/1.6.7.42 Dalvik/2.1.0 (Linux; U; Android 5.1.1; Android SDK built for x86 Build/LMY48X)';

export {deviceModel, appVersion, agent};
