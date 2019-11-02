import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Regform from './Regform';
import WaterConsumption from './WaterConsumption'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          {/* <Regform /> */}
          <WaterConsumption/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#36485f',
  },
});
