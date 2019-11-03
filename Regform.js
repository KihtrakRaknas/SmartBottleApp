import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
            <View style={styles.headerbox}>
                <Text style={styles.header}>Registration</Text>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Username" placeholderTextColor="#888" underlineColorAndroid={'transparent'}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor="#888" underlineColorAndroid={'transparent'}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor="#888" underlineColorAndroid={'transparent'}/>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Sign Up</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch',
    paddingTop: 120,
    paddingLeft: 60,
    paddingRight: 60
  },
  headerbox: {
      marginBottom: 60,
      borderBottomColor: '#03adfc',
      borderBottomWidth: 2,
  },
  header: {
      fontSize: 36,
      justifyContent: 'center',
      color: '#000',
      paddingBottom: 10,
      fontWeight: "bold"
  },
  textinputbox: {
      borderBottomColor:'#000',
      borderBottomWidth: 1,
      marginBottom: 40,
  },
  textinput: {
      alignSelf: 'stretch',
      fontSize: 24,
      height: 40,
      fontWeight: '200',
      marginBottom: 0,
      color: '#000',
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#03adfc',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '200',
  }
});
