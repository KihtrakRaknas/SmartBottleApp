import React from 'react';
import { SafeAreaView, FlatList, Picker, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import SearchableDropDown from 'react-native-searchable-dropdown';

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
  render() {
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
          <SearchableDropDown
          onTextChange={(text) =>  text}
          onItemSelect={(item) =>  JSON.stringify(item)}
          // containerStyle={{
          //   padding: 5
          // }}
          textInputStyle={{
            width: 300,
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5
          }}
          itemStyle={{
            padding: 10,
              marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius:5
          }}
          itemTextStyle={{
          color: '#222'
          }}
          itemsContainerStyle={{
            maxHeight: 220
          }}
          items={items}
          placeholder="Input food name here..."
          textAlign='center'
          resetValue={false}
          underlineColorAndroid='transparent' />
          <View style={styles.verticalcontainer}>
            <View style={styles.verticalitem}>
              <Text style={styles.textinput}>Image</Text>
            </View>
            <View style={styles.verticalitem}>
              <Text style={styles.textinput}>Name</Text>
            </View>
            <View style={styles.verticalitem}>
              <Text style={styles.textinput}>Water Content</Text>
            </View>
          </View>
        </View>
    );
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
        width: '100%'
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
  },
  verticalcontainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  verticalitem: {
    width: '50%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
