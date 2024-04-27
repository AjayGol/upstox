import React, {useEffect, useRef, useState} from 'react';
import HoldingListFlow from './components';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {homeHoldingApi} from '@api';
import HoldingProfitLoss from './components/holdingProfitLoss';
import useStyles from './components/holdingListFlow.styles';
import HoldingHeader from './components/holdingHeader';
import {IHoldingData} from './holdingList.types';

const HoldingList: React.FC = () => {
  const {
    itemSeparatorComponent,
    itemSeparatorComponentSub,
    mainContainer,
    subContainer,
    loadingContainer,
  } = useStyles();

  const Config = useRef({
    itemVisiblePercentThreshold: 95,
    waitForInteraction: true,
    minimumViewTime: 1000,
  });

  const [data, setData] = useState<IHoldingData>({
    userHolding: [],
  });
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    const {data} = await homeHoldingApi.getSearchFnoInstruments();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData().then(r => console.log(r));
  }, []);

  return (
    <View style={mainContainer}>
      <View style={subContainer}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color="black"
            style={loadingContainer}
          />
        ) : (
          <FlatList
            removeClippedSubviews={true}
            keyboardShouldPersistTaps="always"
            showsHorizontalScrollIndicator={false}
            data={data.userHolding}
            decelerationRate="fast"
            viewabilityConfig={Config.current}
            updateCellsBatchingPeriod={8}
            keyExtractor={item => item?.symbol || ''}
            renderItem={({item, index}) => {
              return <HoldingListFlow index={index} item={item} />;
            }}
            ListHeaderComponent={<HoldingHeader />}
            ItemSeparatorComponent={() => (
              <View style={itemSeparatorComponent}>
                <View style={itemSeparatorComponentSub} />
              </View>
            )}
          />
        )}
      </View>
      {loading ? null : <HoldingProfitLoss holdingData={data.userHolding} />}
    </View>
  );
};

export default HoldingList;
