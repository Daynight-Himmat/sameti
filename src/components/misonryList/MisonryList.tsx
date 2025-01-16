import {
  ScrollView,
  RefreshControl,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { View } from 'react-native';
import React, { useCallback } from 'react';
import { useMisonryListStyle } from './MisonryListStyle';
import { MarchantProductData } from '../../interfaces/marchantInterface';

interface IMasonryList {
  isLoading?: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
  onEndReach?: () => void;
  pins?: MarchantProductData[];
  renderItem: ({
    item,
    index,
  }: {
    item: MarchantProductData;
    index: number;
  }) => React.ReactElement;
}

const MasonryList = React.memo(
  ({
    pins,
    refreshing = false,
    onRefresh = () => {},
    onEndReach = () => {},
    isLoading = false,
    renderItem,
  }: IMasonryList) => {
    const { styles, SCREEN_WIDTH } = useMisonryListStyle();

    const numColumns = Math.ceil(SCREEN_WIDTH / 350);

    const handleScroll = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement, contentSize } =
          event.nativeEvent;
        const isEnd =
          layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
        if (isEnd && !isLoading) {
          onEndReach();
        }
      },
      [isLoading, onEndReach],
    );

    return (
      <>
        <ScrollView
          onScroll={handleScroll}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          scrollEventThrottle={16}
          contentContainerStyle={styles?.scrollView}>
          <View style={styles.container}>
            {Array.from(Array(numColumns)).map((_, colIndex) => (
              <View style={styles.column} key={`column_${colIndex}`}>
                {pins &&
                  pins
                    ?.filter((item, index) => index % numColumns === colIndex)
                    .map((item, index) =>
                      renderItem({ item: item, index: index }),
                    )}
              </View>
            ))}
          </View>
        </ScrollView>
      </>
    );
  },
);

export default MasonryList;
