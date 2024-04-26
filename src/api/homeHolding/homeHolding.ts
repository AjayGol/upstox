import {holdingsUrls} from '../config';
import axiosClient from '../client';

import type {AxiosResponse} from 'axios';
import {ISearchHoldingParams} from './homeHolding.types';

const getSearchFnoInstruments = async (
  params: ISearchHoldingParams,
): Promise<AxiosResponse> => {
  const {query = '', limit = 25, skip = 0} = params;

  return axiosClient.request({
    method: 'get',
    url: `${holdingsUrls.createStrategies}skip=${skip}&limit=${limit}&ss=${query}`,
  });
};

export {getSearchFnoInstruments};
