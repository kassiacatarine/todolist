import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { AppLoading, Icon } from 'expo';
import Asset from 'expo-asset';
import * as Font from 'expo-font';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider, Layout } from 'react-native-ui-kitten';

import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <ApplicationProvider
        mapping={mapping}
        theme={lightTheme}>
          <Layout style={styles.container}>
            {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
            <AppNavigator />
          </Layout>
        </ApplicationProvider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./src/assets/img/logo.png'),
      // ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        // 'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});