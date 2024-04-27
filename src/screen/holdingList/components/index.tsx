import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IHoldingListProps} from '../holdingList.types';
import useStyles from './holdingListFlow.styles';

const HoldingListFlow: React.FC<IHoldingListProps> = ({item, index}) => {
  const {ltp, symbol, quantity, close} = item || {};

  const {
    holdingListContainer,
    nameLtpContainer,
    ltpContainer,
    pnlQuantityContainer,
    symbolText,
  } = useStyles();

  const pnl = (close - ltp) * quantity;

  return (
    <TouchableOpacity key={index?.toString()} style={holdingListContainer}>
      <View style={nameLtpContainer}>
        <Text style={symbolText}>{symbol || ''}</Text>

        <View style={{flex: 1}} />
        <View style={ltpContainer}>
          <Text style={{color: 'black'}}>LTP: </Text>
          <Text style={{color: 'black'}}>{`₹ ${ltp.toFixed(2) || 0}`}</Text>
        </View>
      </View>

      <View style={pnlQuantityContainer}>
        <Text style={{color: 'black'}}>{quantity}</Text>

        <View style={{flex: 1}} />
        <Text style={{color: 'black'}}>P/L: </Text>
        <Text style={{color: 'black'}}>{`₹ ${pnl.toFixed(2) || 0}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HoldingListFlow;
