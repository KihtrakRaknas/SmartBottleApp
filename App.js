import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Regform from './Regform';
import WaterConsumption from './WaterConsumption'
import FoodConsumption from './FoodConsumption'
import AddFood from './AddFood'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Regform />
          {/* <WaterConsumption/> */}
          {/* <FoodConsumption/> */}
          {/* <AddFood/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fafafa',
  },
});
