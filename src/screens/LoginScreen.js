import {
  View,
  Text,
  Image,
  TextInput,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Inputs from '../components/Inputs';
import {COLORS, SIZES} from '../constants/styles';
import {Button} from '../components/Button';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();

  return (
    <SafeAreaView style={styles.screen}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Image
            source={require('../constants/logo.png')}
            style={styles.images}
          />
          <View style={styles.container}>
            <Text style={styles.headText}>Login with your mobile number</Text>
            <Inputs
              label="Name"
              keyboardType="default"
              value={name}
              onChangeText={value => {
                setName(value), console.log(name);
              }}
            />
            <Inputs
              label="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={value => {
                setEmail(value), console.log(email);
              }}
            />
            <Inputs
              label="Mobile number"
              keyboardType="numeric"
              value={mobile}
              maxLength={10}
              onChangeText={value => {
                setMobile(value), console.log(mobile);
              }}
            />
          </View>
          <Button>Send</Button>
        </View>
      </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  images: {width: 100, height: 100, margin: 40, alignSelf: 'center'},
  container: {width: '80%'},
  headText: {
    marginVertical: 10,
    fontSize: SIZES.font,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
  },
});
