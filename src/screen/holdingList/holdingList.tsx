import React, {useEffect, useRef, useState} from 'react';
import HoldingListFlow from './components';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {homeHoldingApi} from '@api';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const HoldingList: React.FC = () => {
  const Config = useRef({
    itemVisiblePercentThreshold: 95,
    waitForInteraction: true,
    minimumViewTime: 1000,
  });

  const [data, setData] = useState(null);
  const [visible, setVisible] = useState<boolean>(false);
  const offset = useSharedValue(0);

  const fetchData = async () => {
    const {data} = await homeHoldingApi.getSearchFnoInstruments();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <View style={{backgroundColor: '#C7C7CC', flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          removeClippedSubviews={true}
          keyboardShouldPersistTaps="always"
          showsHorizontalScrollIndicator={false}
          data={data?.userHolding}
          extraData={{}}
          decelerationRate="fast"
          viewabilityConfig={Config.current}
          updateCellsBatchingPeriod={10}
          keyExtractor={item => item?.symbol || ''}
          renderItem={({item, index}) => {
            return <HoldingListFlow index={index} item={item} />;
          }}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: '#FFF',
                height: 2,
                marginHorizontal: 0,
              }}>
              <View
                style={{
                  backgroundColor: '#D7D8D9',
                  height: 1,
                  marginHorizontal: 12,
                }}
              />
            </View>
          )}
        />
      </View>

      <Animated.View
        onPress={onPressProfitLoss}
        style={[
          bottomHeight,
          {
            zIndex: 1,
            bottom: 0,
            left: 0,
            right: 0,
            position: 'absolute',
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingHorizontal: 16,
            overflow: 'hidden',
          },
        ]}>
        <View
          style={[
            {
              bottom: 20,
              left: 16,
              right: 16,
              position: 'absolute',
              overflow: 'hidden',
            },
          ]}>
          <Text
            style={{
              color: 'black',
            }}>
            Current Value:
          </Text>
          <Text
            style={{
              color: 'black',
              marginVertical: 10,
            }}>
            Total Investment:
          </Text>
          <Text
            style={{
              color: 'black',
              marginBottom: 25,
            }}>
            Today's Profit & Loss
          </Text>
          <Text
            style={{
              color: 'black',
            }}>
            Profit & Loss:
          </Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          onPress={onPressProfitLoss}
        />
      </Animated.View>
    </View>
  );

  // return <HoldingListFlow />;
};

export default HoldingList;
