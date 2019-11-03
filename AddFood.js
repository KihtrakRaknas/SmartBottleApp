import React from 'react';
import { SafeAreaView, FlatList, Picker, StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import { ListItem } from 'react-native-elements'

import SearchableDropDown from 'react-native-searchable-dropdown';
import { ScrollView } from 'react-native-gesture-handler';


export default class AddFood extends React.Component { 
  constructor(){
    super();
    this.state = {results:[]}
  } 
  render() {
    var list = [];
    if(this.state.results.length>0)
      for(item of this.state.results){
        console.log(item)
        let nameCopy = (' ' + item.name).slice(1);
        let copy = (' ' + item.water).slice(1);
          list.push(<ListItem
            title={item.name}
            subtitle={Number(item.water)*100+"% water"}
            //leftAvatar={{ source: { uri: item.image?item.image:'data:image/png;base64,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'} }}
            bottomDivider
            onPress={()=>{
              AsyncStorage.getItem('food').then((food)=>{
                if(!food)
                  food = [];
                else
                  food = JSON.parse(food)
                food.push({
                  title:nameCopy,
                  water:Number(copy)*this.state.number
                })
                AsyncStorage.setItem('food',JSON.stringify(food)).then((food)=>{
                  this.props.navigation.goBack(null);
                })
              })
            }}
          />)
      }
    return (
        // <View style={styles.container}>

        //     <Picker style={{width: '80%'}} selectedValue={this.state.food} onValueChange={(itemValue, itemIndex) => this.setState({food:itemValue})}>
        //         <Picker.Item label="Orange" value="9" itemIndex='1'/>
        //         <Picker.Item label="Apple" value="10" itemIndex='2'/>
        //         <Picker.Item label="Orange" value="11" itemIndex='3'/>
        //         <Picker.Item label="Apple" value="12" itemIndex='4'/>
        //         <Picker.Item label="Orange" value="13" itemIndex='5'/>
        //         <Picker.Item label="Apple" value="14" itemIndex='6'/>
        //         <Picker.Item label="Orange" value="15" itemIndex='7'/>
        //         <Picker.Item label="Apple" value="16" itemIndex='8'/>
        //     </Picker>
        //     <Text style = {styles.text}>{this.state.food + " liters of water."}</Text>
            
        //     <Picker style={{width: '80%'}} selectedValue={this.state.time} onValueChange={(itemValue, itemIndex) => this.setState({food:itemValue})}>
        //         <Picker.Item label="Breakfast" value="Breakfast" itemIndex='1'/>
        //         <Picker.Item label="Lunch" value="Lunch" itemIndex='2'/>
        //         <Picker.Item label="Dinner" value="Dinner" itemIndex='3'/>
        //         <Picker.Item label="Snack" value="Snack" itemIndex='4'/>
        //     </Picker>
        //     <Text style = {styles.text}>{this.state.time + " selected."}</Text>

        //  </View>
        // <View style={styles.container}>
        //   <View style={styles.textinputbox}>
        //     <TextInput style={styles.textinput} placeholder="Enter a food name here" placeholderTextColor="#888" underlineColorAndroid={'transparent'}></TextInput>
        //   </View>
        // </View>
        <View style={styles.container}>
          <View style={styles.textinputbox}>
            <TextInput onChangeText={(number) => this.setState({number})} style={styles.textinput} placeholder="# of cups consumed" placeholderTextColor="#888" underlineColorAndroid={'transparent'} keyboardType='numeric'></TextInput>
          </View>
          <View style={styles.textinputbox}>
            <TextInput onChangeText={(text) => this.search(text)} style={styles.textinput} placeholder="Enter a food name here" placeholderTextColor="#888" underlineColorAndroid={'transparent'}></TextInput>
          </View>
          <ScrollView style={{width:'100%'}}>
            {list}
          </ScrollView>
        </View>
    );
  }
  search = (text) =>{
    fetch('https://smartbottleserver.herokuapp.com/searchFood', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        foodName: text,
      }),
  }).then((response) => {
      try{
          return response.json()
      }catch(err){
          Alert.alert("err")
      }
  })
  .then((responseJson) => {
      console.log(responseJson)
      this.setState({results:responseJson})
  })
  .catch((error) => {
    console.error(error);
  });
  }
}

const styles = StyleSheet.create({
      container: {
        paddingTop: 80,
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        
    },
      textinput: {
        alignSelf: 'stretch',
        fontSize: 24,
        height: 40,
        width: '100%',
        fontWeight: '200',
        marginBottom: 0,
        color: '#000',
        textAlign: 'center'
    },
    textinputbox: {
      borderBottomColor:'#000',
      borderBottomWidth: 1,
      marginBottom: 40,
      width: '100%',
  },
  verticalcontainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  verticalitem: {
    width: '50%',
    height: '100%',
    flex: 1,
   
  },
});
