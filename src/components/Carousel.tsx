import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

interface CarouselItem {
  id: string;
  image: number;
  title: string;
}
const screenWidth = Dimensions.get('window').width;
const Carousel: React.FC = () => {
  const flatlistRef = useRef<FlatList<CarouselItem>>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const navigation = useNavigation();

  const carouselData: CarouselItem[] = [
    {
      id: '01',
      image: require('../images/home1.jpg'),
      title: 'This is image',
    },
    {
      id: '02',
      image: require('../images/home5.jpg'),
      title: 'This is image',
    },
    {
      id: '03',
      image: require('../images/home2.jpg'),
      title: 'This is image',
    },
    {
      id: '04',
      image: require('../images/home3.jpg'),
      title: 'This is image',
    },
    {
      id: '05',
      image: require('../images/home4.jpg'),
      title: 'This is image',
    },
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatlistRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (
    _data: any,
    index: number,
  ): {length: number; offset: number; index: number} => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
    setActiveIndex(index);
  };

  const jumpToImage = (index: number) => {
    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => (
      <View key={dot.id} style={styles.dotBorder}>
        <TouchableOpacity
          key={dot.id}
          onPress={() => jumpToImage(index)}
          style={[
            styles.dotIndicator,
            {
              backgroundColor: index === activeIndex ? '#00eeff' : 'none',
              opacity: index === activeIndex ? 1 : 0,
            },
          ]}
        />
      </View>
    ));
  };

  const renderItem = ({item}: {item: CarouselItem}) => (
    <TouchableOpacity style={{display: 'flex', position: 'relative'}}>
      <Image source={item.image} style={{height: 200, width: screenWidth}} />
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
      />
      <View style={styles.indicatorContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
    width: screenWidth,
    bottom: 10,
  },
  dotIndicator: {
    height: 8,
    width: 8,
    borderRadius: 10,
    marginHorizontal: 4,
  },
  dotBorder: {
    height: 9,
    width: 9,
    borderRadius: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    bottom: 35,
    width: screenWidth,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});

export default Carousel;
