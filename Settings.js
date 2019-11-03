import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, AsyncStorage, Alert} from 'react-native';

const data = [
    {label: '100', value: '100'},
    {label: '100', value: '100'},
    {label: '100', value: '100'},
    {label: '100', value: '100'},
    {label: '100', value: '100'},
    {label: '100', value: '100'},
    {label: '100', value: '100'}
]
export default class Regform extends React.Component {
    constructor(){
        super();
        this.state = {username:"",email:"",password:"", weight:''};
        updateWeight=(weight) => {
            this.setState({weight: weight})
        }
        this.state = {username:"",email:"",password:"",loading:false};
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.regform} behavior="position">
            <View style={styles.headerbox}>
                <Text style={styles.header}>Settings</Text>
            </View>
            <View style={styles.textinputbox}>
                <TextInput keyboardType='numeric' style={styles.textinput} placeholder="Change Weight" placeholderTextColor="#888" underlineColorAndroid={'transparent'} onChangeText={(weight) => this.setState({weight})} value={this.state.weight}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.signOut}>
                {!this.state.loading?<Text style={styles.btntext}>Sign Out</Text>:<ActivityIndicator/>}
            </TouchableOpacity>
      </KeyboardAvoidingView>
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
  picker: {
      alignSelf: 'stretch',
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
      marginVertical: 30,
      
  },
  btntext: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '200',
  }
});
