import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Text, TextProps, Layout } from 'react-native-ui-kitten';

export default class Logo extends Component {
  render() {
    return (
      <Layout style={styles.container}>
        {/* <Image source={require('../assets/img/logo.png')} style={{ height: 50, width: 30 }} /> */}
        <Text style={styles.text} category='h1'>To-Do List</Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 20,
    color: 'blue'
  },
});