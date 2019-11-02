import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Regform from './Regform';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Regform />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    backgroundColor:'#36485f',
    paddingLeft: 60,
    paddingRight: 60
  },
});
