import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.item, styles.verticalcontainer}>
                <View style={styles.verticalitem}>
                    <Text>Hello</Text>
                </View>
                <View style={styles.verticalitem}>
                    <Text style={styles.infotext}>Placeholder Info</Text>
                    <Text style={styles.infotext}>Placeholder Info</Text>
                    <Text style={styles.infotext}>Placeholder Info</Text>
                </View>
            </View>
            <View style={styles.item}>
                
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        width: '100%',
        alignItems: 'center',
        height: '50%',
        borderWidth: 1,
        borderColor: '#fff',
    },
    verticalcontainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    verticalitem: {
        width: '50%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infotext: {
        width: '100%',
        height: '25%',
        fontSize: 24,
        color: '#fff',
        textAlign: 'center'
    }
});
