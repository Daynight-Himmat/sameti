import debounce from 'lodash/debounce';
import NoImage from '../noImage/NoImage';
import { SCREEN_WIDTH } from '../../styles';
import { openModal } from '../../helpers/utils';
import { MODALS } from '../../constants/routeConstant';
import { useImageSliderStyle } from './ImageSliderStyle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, FlatList, Image, ViewToken, Pressable } from 'react-native';

const width = SCREEN_WIDTH - 12;

interface Props {
  data: any;
  height?: any;
}

const ImageSlider = ({ data, height = 240 }: Props) => {
  const slider = useRef<any>();
  const intervalRef = useRef<any>();
  const { styles } = useImageSliderStyle();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const scrollToNext = useCallback(() => {
    let index = currentIndex + 1;
    intervalRef.current = setInterval(() => {
      if (index > data?.length - 1) {
        clearInterval(intervalRef.current);
        return;
      }
      slider?.current?.scrollToIndex({
        animated: true,
        index: index,
        viewOffset: -12 * index,
      });
      index++;
    }, 2500);
  }, [currentIndex, data]);

  useEffect(() => {
    if (data?.length) {
      scrollToNext();
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex, data, scrollToNext]);

  useEffect(() => {
    if (currentIndex === data?.length - 1) {
      setTimeout(() => {
        slider?.current?.scrollToIndex({
          animated: true,
          index: 0,
          viewOffset: 0,
        });
      }, 100);
    }
  }, [currentIndex, data, scrollToNext]);

  const onViewableItemsChanged = useCallback(
    ({
      viewableItems,
    }: {
      viewableItems: ViewToken[];
      changed: ViewToken[];
    }) => {
      if (viewableItems?.length > 0) {
        setActiveIndex(viewableItems?.[0]?.index || currentIndex);
        updateIndex(viewableItems?.[0]?.index || currentIndex);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const updateIndex = debounce((index: number) => {
    setCurrentIndex(index);
  }, 1000);

  const onScrollBeginDrag = () => {
    clearInterval(intervalRef.current);
  };

  const renderItem = ({ item }: { item: any }) => (
    <Pressable
      style={[styles.itemContainer, { height }]}
      onPress={onImagePress}>
      <Image
        source={{ uri: item }}
        style={[styles.image, { width }]}
        resizeMode="contain"
      />
    </Pressable>
  );

  const onImagePress = () => {
    openModal(MODALS.imageView, {
      data,
    });
  };

  const renderEmpty = useCallback(
    () => (
      <NoImage
        height={height / 1.125}
        style={styles.itemContainer}
        width={width / 1.125}
      />
    ),
    [styles, height],
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref => (slider.current = ref)}
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, i) => i?.toString()}
        horizontal
        bounces={false}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={scrollToNext}
        ListEmptyComponent={renderEmpty}
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(i, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      {data?.length > 0 && (
        <View style={styles.dotContainer}>
          {data?.length &&
            data.map((_: any, index: number) => (
              <View
                key={index}
                style={[styles.dot, index === activeIndex && styles.activeDot]}
              />
            ))}
        </View>
      )}
    </View>
  );
};

export default ImageSlider;
