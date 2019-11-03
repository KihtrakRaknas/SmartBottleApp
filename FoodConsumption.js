import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const DATA = [
                {
                    id: '1',
                    title: 'First Item',
                    water: '0.22L'
                }, 
                {
                    id: '2',
                    title: 'Second Item',
                    water: '0.07L'
                },
                {
                    id: '3',
                    title: 'Third Item',
                    water: '0.16L'
                },
                {
                    id: '4',
                    title: 'First Item',
                    water: '0.22L'
                }, 
                {
                    id: '5',
                    title: 'Second Item',
                    water: '0.07L'
                },
                {
                    id: '6',
                    title: 'Third Item',
                    water: '0.16L'
                },
                {
                    id: '7',
                    title: 'First Item',
                    water: '0.22L'
                }, 
                {
                    id: '8',
                    title: 'Second Item',
                    water: '0.07L'
                },
                {
                    id: '9',
                    title: 'Third Item',
                    water: '0.16L'
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

            <TouchableOpacity style={styles.button} onPress={() => navigate('AddFood')}>
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

