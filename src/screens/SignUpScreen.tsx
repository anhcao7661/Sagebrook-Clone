import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '@rneui/themed';
import {TextInput} from 'react-native-paper';
import Close from '../components/Close';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <Text style={{fontSize: 30}}>Sign up</Text>
          <Close />
        </View>
      </View>
      <View style={styles.loginForm}>
        <View>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={email => setEmail(email)}
            // @ts-expect-error TS(2322): Type '{ label: string; value: string; onChangeText... Remove this comment to see the full error message
            backgroundColor="#ffffff"
            activeUnderlineColor="#2474ff"
            style={{height: 60}}
          />
        </View>
        <View>
          <TextInput
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={password => setPassword(password)}
            // @ts-expect-error TS(2322): Type '{ label: string; value: string; onChangeText... Remove this comment to see the full error message
            backgroundColor="#ffffff"
            style={{height: 60}}
            activeUnderlineColor="#2474ff"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 30,
    marginVertical: 25,
  },
  loginForm: {
    backgroundColor: '#ffffff',
    padding: 30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 30,
    marginVertical: 45,
    paddingVertical: 10,
  },
});
