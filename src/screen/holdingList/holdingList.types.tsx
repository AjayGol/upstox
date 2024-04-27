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

export type {IHoldingListProps, IHoldingDataProps};
