import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Loading extends Component {
  render() {
    return (
      <View style={styles.loading}>
        <Text> Loading </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1
  }
});