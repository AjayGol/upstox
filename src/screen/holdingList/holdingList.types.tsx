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

export type {IHoldingListProps};
