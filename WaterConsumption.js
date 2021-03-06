import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Card, AsyncStorage } from 'react-native';

import CardView from 'react-native-rn-cardview'
import ProgressCircle from 'react-native-progress-circle'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class WaterConsumption extends React.Component {

   constructor() {
    super();
    this.state = {total:1,today:1};
    AsyncStorage.getItem("email").then(email => {
        fetch('https://smartbottleserver.herokuapp.com/total', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email
            }),
        }).then((response) => {
                return response.json()
        })
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                total: responseJson.cups
            });
        })
        .catch((error) => {
        console.error(error);
        });
    })

        fetch('https://smartbottleserver.herokuapp.com/today', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                today: responseJson.drank
            });
        })
        .catch((error) => {
        console.error(error);
    })

    
    }
   

  render() {
    console.log("FJLSKDFJLDKSFDSKLJFKLDSJFKL" + this.state);
    return (
        <View style={styles.container}>
            <CardView cardElevation={4} maxCardElevation={4} radius={40} backgroundColor={'#fff'} style={styles.item}>
                 <View style={styles.verticalcontainer}>
                    <View style={styles.verticalitem}>
                        <ProgressCircle
                            percent={this.state.today/this.state.total * 100}
                            radius={70}
                            borderWidth={8}
                            color="#03adfc"
                            shadowColor="#999"
                            bgColor="#fff">
                            <Text style={{ fontSize: 28, color: '#000', fontWeight: '200'}}>{this.state.today/this.state.total * 100}%</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.verticalitem}>
                        <Text style={styles.infotext}>0.29L (Water)</Text>
                        <Text style={styles.infotext}>0.49L (Food)</Text>
                        <Text style={styles.infotext}>Daily Goal Met!</Text>
                    </View>
                </View>
            </CardView>
            <View style={padding=10}>
                <Text></Text>
            </View>
            <CardView cardElevation={10} maxCardElevation={10} radius={40} backgroundColor={'#fff'} style={styles.item}>
                <View style={styles.verticalcontainer}>
                    <View >
                        <Image source={require('./graph.png')}/>
                    </View>
                </View>
            </CardView>
            {/* <View style={styles.lineStyle}></View>
            <View style={styles.verticalcontainer}>
                <TouchableOpacity style={backgroundColor='#03adfc'}>
                    <Icon.Button name='arrow-left' size={25} color='white'/>
                </TouchableOpacity>
                <View>
                    <Text style={styles.lineStyle}>

                    </Text>
                </View>
                <TouchableOpacity>
                    <Icon.Button name='arrow-right' size={25} color='white'/>
                </TouchableOpacity>

            </View> */}
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        padding: 30,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        width: '100%',
        alignItems: 'center',
        height: '40%',
    },
    verticalcontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    verticalitem: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infotext: {
        width: '100%',
        height: '25%',
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        // textDecorationLine: 'underline',
        fontWeight: '200'
    },
    button: {
        // alignSelf: 'stretch',
        alignItems: 'center',
        // padding: 20,
        backgroundColor: '#fff',
        marginTop: 30,
        width: '45%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03adfc'
    },
    btntext: {
        color: '#000',
        fontWeight: '200',
        fontSize: 18,
    },
    lineStyle: {
        margin: 30
    },
    botPadding: {
        paddingBottom: 10
    }
});

