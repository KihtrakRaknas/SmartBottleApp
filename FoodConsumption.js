import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
                {
                    id: '1',
                    title: 'Orange',
                    water: '0.03L'
                }, 
                {
                    id: '2',
                    title: 'Apple',
                    water: '0.01'
                },
                {
                    id: '3',
                    title: 'Cereal',
                    water: '0.01'
                },
                {
                    id: '4',
                    title: 'Watermelon',
                    water: '0.13L'
                }, 
                {
                    id: '5',
                    title: '',
                    water: '0.07L'
                },
                {
                    id: '6',
                    title: 'Rice',
                    water: '0.06L'
                },
                {
                    id: '7',
                    title: 'Banana',
                    water: '0.0L'
                }, 
                {
                    id: '8',
                    title: 'Pasta',
                    water: '.0072L'
                },
                {
                    id: '9',
                    title: 'Pear',
                    water: '0.02L'
                }
             ]

function Item({title, water}) {
    return (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.water}>{water}</Text>
    </View>)
}

export default class FoodConsumption extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.listcontainer}>
                <FlatList
                    data={DATA}
                    renderItem={({item}) =><Item title={item.title} water={item.water}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Add Food to List</Text>
            </TouchableOpacity>
        </View>
            
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        padding: 20,
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    listcontainer: {
        flex: 1,
        width: '100%',
        marginTop: Constants.statusBarHeight,
        marginBottom: 20
    },
    item: {
        borderColor: '#aaa',
        borderWidth: 1,
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: '200'
    },
    water: {
        fontSize: 22,
        fontWeight: '200'
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#03adfc',
        padding: 20,
        marginBottom: 40,
        marginVertical: 3,
        marginHorizontal: 16,
    },
    btntext: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '200',
    }
});

