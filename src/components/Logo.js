import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={require('../assets/img/logo.png')} style={{ height: 50, width: 30 }} /> */}
        <Text>To-Do List</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});