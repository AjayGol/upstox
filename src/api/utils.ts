import {agent, appVersion, deviceModel} from '@utils/environment';

const getHeaders = () => {
  const model = deviceModel;
  return {
    'User-Agent': agent,
    appVersion,
    model,
  };
};

export {getHeaders};
