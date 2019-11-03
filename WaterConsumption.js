import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Card } from 'react-native';

import CardView from 'react-native-rn-cardview'
import ProgressCircle from 'react-native-progress-circle'

export default class WaterConsumption extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <CardView cardElevation={4} maxCardElevation={4} radius={40} backgroundColor={'#fff'} style={styles.item}>
                 <View style={styles.verticalcontainer}>
                    <View style={styles.verticalitem}>
                        <ProgressCircle
                            percent={30}
                            radius={50}
                            borderWidth={8}
                            color="#03adfc"
                            shadowColor="#999"
                            bgColor="#fff">
                            <Text style={{ fontSize: 22, color: '#000', fontWeight: '200'}}>{'30%'}</Text>
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
            <View style={styles.verticalcontainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Previous</Text>
                </TouchableOpacity>
                <View style={styles.lineStyle}>
                    <Text></Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btntext}>Next</Text>
                </TouchableOpacity>
            </View>
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
        padding: 10
    }
});

