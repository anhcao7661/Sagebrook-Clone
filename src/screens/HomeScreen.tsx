import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Carousel from '../components/Carousel';
import {TouchableOpacity} from 'react-native';
import CategoryContainer from '../components/CategoryContainer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          justifyContent: 'center',
          height: 50,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
          }}>
          SAGEBROOK HOME
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProductsScreen')}>
          <Icon name="star" size={20} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Carousel />
        <View style={{marginTop: 5}}>
          <CategoryContainer
            screenWidth={screenWidth}
            imageSource={require('../images/Home.jpg')}
          />
          <View style={{flexDirection: 'row', display: 'flex'}}>
            <CategoryContainer
              screenWidth={screenWidth / 2}
              imageSource={require('../images/home2.jpg')}
            />
            <CategoryContainer
              screenWidth={screenWidth / 2}
              imageSource={require('../images/home1.jpg')}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <CategoryContainer
              screenWidth={screenWidth / 2}
              imageSource={require('../images/home10.jpg')}
            />
            <CategoryContainer
              screenWidth={screenWidth / 2}
              imageSource={require('../images/home9.jpg')}
            />
          </View>
          <CategoryContainer
            screenWidth={screenWidth}
            imageSource={require('../images/home8.jpg')}
          />
          <View style={{flexDirection: 'row'}}>
            <CategoryContainer
              screenWidth={screenWidth / 2}
              imageSource={require('../images/home7.jpg')}
            />
            <CategoryContainer
              screenWidth={screenWidth / 2}
              imageSource={require('../images/home6.jpg')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
