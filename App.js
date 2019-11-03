import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Regform from './Regform';
import WaterConsumption from './WaterConsumption'
import FoodConsumption from './FoodConsumption'
import AddFood from './AddFood'
import { SplashScreen } from 'expo';
import Settings from './Settings'


export default class App extends React.Component {
  state = {
    email: null
  }
  constructor(){
    super();
    AsyncStorage.getItem("email").then((email)=>{
      console.log(email)
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
    if(this.state.email!="no"){
      const foodNav = createStackNavigator({
        Home: {screen: FoodConsumption},
        AddFood: {screen: AddFood},
      });
      const App = createAppContainer(createBottomTabNavigator({
        Dashboard: WaterConsumption,
        Food: foodNav,
        Settings: Settings,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            let color = "black";
            if(focused)
              color = "#4287F5"
            if (routeName === 'Dashboard') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            } else if (routeName === 'Food') {
              iconName = `ios-restaurant`;
            } else if (routeName === 'Settings') {
              iconName = `ios-settings`;
            }
    
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: '#4287F5',
          inactiveTintColor: 'gray',
        },
      }))
      screen = <App/>;
    }
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
