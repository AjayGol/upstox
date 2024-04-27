import React, {useEffect, useRef, useState} from 'react';
import HoldingListFlow from './components';
import {FlatList, View} from 'react-native';
import {homeHoldingApi} from '@api';
import HoldingProfitLoss from './components/holdingProfitLoss';
import useStyles from './components/holdingListFlow.styles';

const HoldingList: React.FC = () => {
  const {
    itemSeparatorComponent,
    itemSeparatorComponentSub,
    mainContainer,
    subContainer,
  } = useStyles();

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
    fetchData().then(r => console.log(r));
  }, []);

  return (
    <View style={mainContainer}>
      <View style={subContainer}>
        <FlatList
          removeClippedSubviews={true}
          keyboardShouldPersistTaps="always"
          showsHorizontalScrollIndicator={false}
          data={data?.userHolding}
          extraData={{}}
          decelerationRate="fast"
          viewabilityConfig={Config.current}
          updateCellsBatchingPeriod={8}
          keyExtractor={item => item?.symbol || ''}
          renderItem={({item, index}) => {
            return <HoldingListFlow index={index} item={item} />;
          }}
          ItemSeparatorComponent={() => (
            <View style={itemSeparatorComponent}>
              <View style={itemSeparatorComponentSub} />
            </View>
          )}
        />
      </View>

      <HoldingProfitLoss holdingData={data?.userHolding} />
    </View>
  );
};

export default HoldingList;
