import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Close from '../components/Close';

const ClaimScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 30}}>Claim</Text>
          <Close />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ClaimScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
    marginVertical: 25,
  },
});
