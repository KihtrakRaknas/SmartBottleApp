import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';

import Regform from './Regform';
import WaterConsumption from './WaterConsumption'
import FoodConsumption from './FoodConsumption'
import AddFood from './AddFood'
import { SplashScreen } from 'expo';


export default class App extends React.Component {
  state = {
    email: null
  }
  constructor(){
    super();
    AsyncStorage.getItem("email",(email)=>{
      if(email)
        this.setState({email:email})
      else
        this.setState({email:"no"})
    });
  }
  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if(this.state.email)
    setTimeout(()=>SplashScreen.hide(),10)
    var screen = <Regform func={this.doneSignIn.bind(this)}/>;
    if(this.state.email!="no")
      screen = <WaterConsumption/>;
    return (
      <View style={styles.container}>
          {screen}  
      </View>
    );
  }

  doneSignIn = () =>{
    console.log("called")
    this.setState({email:"yes"})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fafafa',
  },
});
