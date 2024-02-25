import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Platform, TouchableOpacity } from 'react-native';

export default function SettingScreen ({navigation, route}) {
//     const {userInfo} = route.params;
//     const name = userInfo.name;
//   const age = userInfo.age;
//   const gender = userInfo.gender;
    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
            <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
            <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            </View>
            </View> 
            <View style={{flex: .75, paddingLeft: 20}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Settings</Text>
            </View>
            <View style={{flex: 1, paddingLeft: 20}}>
            <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Name</Text>
            {/* <Text>Name: {name}</Text>   */}
            </View>
            <View style={{flex: 1, paddingLeft: 20}}>
                <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Age</Text>
                {/* <Text>Age: {age}</Text> */}
            </View>
            <View style={{flex: 1, paddingLeft: 20}}> 
                <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Gender</Text>
                {/* <Text>Gender: {gender}</Text>  */}
            </View>
            <View style={{flex: 4.5}}> 
            <Text></Text>
            </View>
           
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      button: {
        height: 20,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 5,
        width: 60,
      },
      settingContainer: {
        flex: 1,
        position: 'absolute',
        top: 20, // Adjust as needed
        left: 20, // Adjust as needed
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
})