import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IHoldingDataProps} from '../holdingList.types';
import useStyles from './holdingListFlow.styles';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const HoldingProfitLoss: React.FC<IHoldingDataProps> = ({holdingData}) => {
  const offset = useSharedValue(0);
  const {
    bottomContainer,
    bottomTextContainer,
    swipeContainer,
    bottomText,
    bottomListContainer,
    bottomTextValue,
  } = useStyles();

  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const calculateValue = () => {
    let totalCurrentValue = 0;
    let totalInvestmentValue = 0;
    let totalTodayPnl = 0;

    holdingData?.forEach(item => {
      const currentValue = item?.ltp * item?.quantity;
      const investmentValue = item?.avgPrice * item?.quantity;
      const todayPnl = (item?.close - item?.ltp) * item?.quantity;
      totalCurrentValue += currentValue;
      totalInvestmentValue += investmentValue;
      totalTodayPnl += todayPnl;
    });

    const allValue = [
      {
        title: 'Current Value:',
        value: totalCurrentValue,
      },
      {
        title: 'Total Investment:',
        value: totalInvestmentValue,
      },
      {
        title: "Today's Profit & Loss:",
        value: totalTodayPnl,
      },
      {
        title: 'Profit & Loss:',
        value: totalCurrentValue - totalInvestmentValue,
      },
    ];
    setData(allValue);
  };

  useEffect(() => {
    calculateValue();
  }, [holdingData]);

  const onPressProfitLoss = () => {
    setVisible(!visible);
    offset.value = withDelay(
      0,
      withTiming(visible ? 0 : 1, {
        duration: 200,
        easing: Easing.linear,
      }),
    );
  };

  const bottomHeight = useAnimatedStyle(() => {
    const marginTopStyle = interpolate(offset.value, [0, 1], [50, 150]);

    return {
      height: marginTopStyle,
    };
  });

  return (
    <Animated.View
      onPress={onPressProfitLoss}
      style={[bottomHeight, bottomContainer]}>
      <View style={bottomTextContainer}>
        {data?.map((item, index) => {
          return (
            <View style={bottomListContainer} key={index}>
              <Text style={bottomText}>{item?.title}</Text>
              <Text style={bottomTextValue}>
                {`₹${item?.value.toFixed(2) || 0}`}
              </Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity style={swipeContainer} onPress={onPressProfitLoss} />
    </Animated.View>
  );
};

export default HoldingProfitLoss;
