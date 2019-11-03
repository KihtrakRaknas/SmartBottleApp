import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView} from 'react-native';

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
                <Text style={styles.header}>Registration</Text>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Full Name" placeholderTextColor="#888" underlineColorAndroid={'transparent'} onChangeText={(username) => this.setState({username})} value={this.state.username}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput style={styles.textinput} placeholder="Email" placeholderTextColor="#888" underlineColorAndroid={'transparent'} onChangeText={(email) => this.setState({email})} value={this.state.email}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput secureTextEntry style={styles.textinput} placeholder="Password" placeholderTextColor="#888" underlineColorAndroid={'transparent'} onChangeText={(password) => this.setState({password})} value={this.state.password}/>
            </View>
            <View style={styles.textinputbox}>
                <TextInput keyboardType='numeric' style={styles.textinput} placeholder="Weight" placeholderTextColor="#888" underlineColorAndroid={'transparent'} onChangeText={(weight) => this.setState({weight})} value={this.state.weight}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={this.signIn}>
                {!this.state.loading?<Text style={styles.btntext}>Sign Up</Text>:<ActivityIndicator/>}
            </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

  signIn = () =>{
      this.setState()
    fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fullName: this.state.username,
            weight: 'yourOtherValue',
            email: this.state.username,
            password: this.state.password
        }),
    }).then((response) => response.json())
    .then((responseJson) => {
        if(responseJson && responseJson.status == "complete"){
            //sign in
        }
    })
    .catch((error) => {
      console.error(error);
    });
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
