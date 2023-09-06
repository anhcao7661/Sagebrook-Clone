import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import CategoryScreen from './CategoryScreen';
import {CategoryScreenProps} from '../types/categoryScreenProps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Route = {
  key: string;
  title: string;
};

const initialLayout = {width: Dimensions.get('window').width};

const Categories: Route[] = [
  {key: 'category1', title: 'Category 1'},
  {key: 'category2', title: 'Category 2'},
  {key: 'category3', title: 'Category 3'},
  {key: 'category4', title: 'Category 4'},
  {key: 'category5', title: 'Category 5'},
];

const renderScene = SceneMap(
  Categories.reduce((scenes, category) => {
    scenes[category.key] = () => <CategoryScreen category={category.title} />;
    return scenes;
  }, {} as Record<string, React.ComponentType<CategoryScreenProps>>),
);

const ProductsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [index, setIndex] = useState(0);

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled={true} // Enable scroll for the tab bar
      indicatorStyle={{backgroundColor: 'green'}}
      style={{backgroundColor: 'white'}}
      labelStyle={{color: 'black'}}
    />
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} style={styles.icon} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <Icon name="bars-staggered" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{index, routes: Categories}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    marginHorizontal: 10,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    justifyContent: 'space-between',
  },
});
