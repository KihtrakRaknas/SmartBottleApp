import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import Constants from 'expo-constants';


function Item({title, water}) {
    return (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.water}>{water}</Text>
    </View>)
}

export default class FoodConsumption extends React.Component {
constructor(){
    super();
    this.state = {data:[]}
}
    
componentWillMount = () => {

    const didBlurSubscription = this.props.navigation.addListener(
        'didFocus',
        payload => {
            this.setState()
            console.log("back")
          console.debug('didBlur', payload);
          AsyncStorage.getItem('food').then((food)=>{
                if(food){
                    this.setState({data:JSON.parse(food)});
                    console.log(JSON.parse(food))
                }
            })
        }
      );
}

componentWillUnmount = () =>{
    didBlurSubscription.remove();
}

  render() {
    AsyncStorage.getItem('food').then((food)=>{
        if(food){
            this.setState({data:JSON.parse(food)});
        }
    })
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.listcontainer}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =><Item title={item.title} water={item.water}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('AddFood')}>
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

