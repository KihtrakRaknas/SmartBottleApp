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
                <TextInput style={styles.textinput} placeholder="Username" placeholderTextColor="#fff" underlineColorAndroid={'transparent'}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor="#fff" underlineColorAndroid={'transparent'}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Password" placeholderTextColor="#fff" underlineColorAndroid={'transparent'}/>
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

  },
  headerbox: {
      marginBottom: 60,
      borderBottomColor: '#199187',
      borderBottomWidth: 2,
  },
  header: {
      fontSize: 36,
      justifyContent: 'center',
      color: '#fff',
      paddingBottom: 10,
      borderBottomColor: '#199187',
      borderBottomWidth: 5,
  },
  textinputbox: {
      borderBottomColor:'#f8f8f8',
      borderBottomWidth: 1,
      marginBottom: 40,
  },
  textinput: {
      alignSelf: 'stretch',
      fontSize: 24,
      height: 40,
      marginBottom: 0,
      color: '#fff',
  },
  button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30,
  },
  btntext: {
      color: '#fff',
      fontWeight: 'bold',
  }
});
