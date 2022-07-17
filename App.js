import {View, Text, Image, Button, SafeAreaView} from 'react-native';
import React from 'react';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-community/google-signin';
import {Component} from 'react/cjs/react.production.min';
GoogleSignin.configure({
  webClientId:
    '262331036605-brp7bfqchsrub5n5vtecnh421op7u6gn.apps.googleusercontent.com',
  iosClientId:
    '262331036605-7t46udhkdj13i5sholujmn82lsqa8uom.apps.googleusercontent.com',
  offlineAccess: true,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGoogleInfo: {},
      loaded: false,
    };
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({
        userGoogleInfo: userInfo,
        loaded: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Button title="google signin" onPress={this.signIn} />
        {this.state.loaded && (
          <View>
            <Text>{this.state.userGoogleInfo.user.name}</Text>
            <Text>{this.state.userGoogleInfo.user.email}</Text>
            <Image
              source={{uri: `${this.state.userGoogleInfo.user.photo}`}}
              style={{width: 100, height: 100}}
            />
          </View>
        )}
        {!this.state.loaded && <Text>Not signed in</Text>}
      </SafeAreaView>
    );
  }
}

export default App;
