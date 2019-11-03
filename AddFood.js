import React from 'react';
import { SafeAreaView, FlatList, Picker, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'

var  items  = [
	{
		id: 1,
		name: 'Javascript'
	},
	{
		id: 2,
		name: 'Java'
	},
	{
		id: 3,
		name: 'Ruby'
	},
	{
		id: 4,
		name: 'React Native'
	},
	{
		id: 5,
		name: 'PHP'
	},
	{
		id: 6,
		name: 'Python'
	},
	{
		id: 7,
		name: 'Go'
	},
	{
		id: 8,
		name: 'Swift'
	},
];

export default class AddFood extends React.Component { 
  constructor(){
    super();
    this.state = {results:[]}
  } 
  render() {
    var list = null;
    if(this.state.results.length>0)
      for(item of this.state.results){
          list.push(<ListItem
            title={item.name}
            subtitle={item.water}
            leftAvatar={item.image?{ source: { uri: item.image} }:null}
            bottomDivider
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
        <View style={styles.container}>
          <View style={styles.textinputbox}>
            <TextInput style={styles.textinput} placeholder="Enter a food name here" placeholderTextColor="#888" underlineColorAndroid={'transparent'}></TextInput>
          </View>
          <View>
            {list}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 60,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      },
      textinput: {
        alignSelf: 'stretch',
        fontSize: 24,
        height: 40,
        width: 250,
        fontWeight: '200',
        marginBottom: 0,
        color: '#000',
        textAlign: 'center'
    },
    textinputbox: {
      borderBottomColor:'#000',
      borderBottomWidth: 1,
      marginBottom: 40,
  },
});