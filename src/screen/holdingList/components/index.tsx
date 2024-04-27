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
    valueText,
    simpleText,
  } = useStyles();

  const pnl = (close - ltp) * quantity;

  return (
    <TouchableOpacity key={index?.toString()} style={holdingListContainer}>
      <View style={nameLtpContainer}>
        <Text style={symbolText}>{symbol || ''}</Text>

        <View style={ltpContainer}>
          <Text style={simpleText}>LTP: </Text>
          <Text style={valueText}>{`₹ ${ltp.toFixed(2) || 0}`}</Text>
        </View>
      </View>

      <View style={pnlQuantityContainer}>
        <Text style={simpleText}>{quantity}</Text>

        <View style={{flex: 1}} />
        <Text style={simpleText}>P/L: </Text>
        <Text style={valueText}>{`₹ ${pnl?.toFixed(2) || 0}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HoldingListFlow;
