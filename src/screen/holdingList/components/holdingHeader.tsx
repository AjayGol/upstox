import React from 'react';
import {Text, View} from 'react-native';
import useStyles from './holdingListFlow.styles';

const HoldingHeader: React.FC = () => {
  const {headerContainer, headerText} = useStyles();

  return (
    <View style={headerContainer}>
      <Text style={headerText}>{'Upstox Holding'}</Text>
    </View>
  );
};

export default HoldingHeader;
