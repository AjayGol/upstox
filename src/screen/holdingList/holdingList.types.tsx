import React from 'react';

interface IItemProps {
  ltp: number;
  symbol: string;
  quantity: number;
  avgPrice: number;
  close: number;
}

interface IHoldingListProps {
  item: IItemProps;
  index: number;
}

interface IHoldingDataProps {
  holdingData: any;
}

interface IHolding {
  symbol: string;
  quantity: number;
  ltp: number;
  avgPrice: number;
  close: number;
}

interface IHoldingData {
  userHolding: IHolding[];
}

export type {IHoldingListProps, IHoldingDataProps, IHoldingData};
