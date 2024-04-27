import React, {useEffect, useRef, useState} from 'react';
import HoldingListFlow from './components';
import {FlatList, View} from 'react-native';
import {homeHoldingApi} from '@api';
import HoldingProfitLoss from './components/holdingProfitLoss';

const HoldingList: React.FC = () => {
  const Config = useRef({
    itemVisiblePercentThreshold: 95,
    waitForInteraction: true,
    minimumViewTime: 1000,
  });

  const [data, setData] = useState(null);

  const fetchData = async () => {
    const {data} = await homeHoldingApi.getSearchFnoInstruments();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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

      <HoldingProfitLoss holdingData={data?.userHolding} />
    </View>
  );

  // return <HoldingListFlow />;
};

export default HoldingList;
