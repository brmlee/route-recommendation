import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Platform, TouchableOpacity } from 'react-native';
const UM = require('./assets/UofM.png');
const TAM = require('./assets/TexasA&M.png');
const logoIMG = require('./assets/combinedicon.png');


export default function GetStartedScreen ({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={UM} />
                <Image style={styles.image} source={TAM} />
            </View>
        </View>
        <View style={styles.midContainer}>
            <Image style={{ height: '100%'}} source={logoIMG} ></Image>
        </View>
        <View style={styles.botContainer}>
            <View style={{ paddingRight: 100,marginTop: 0 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold'}}>
            Navigate easily,
            </Text>
            </View>
     
            <View style={{ paddingLeft: 30, paddingBottom: 10}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            Arrive stress-free!
            </Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'normal', textAlign: 'center' }}>
             Enhance your urban walking
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'normal' , textAlign: 'center'}}>
                experience with optimal routes
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 'normal',  textAlign: 'center' }}>
                recommended by the app.        
            </Text>
        </View>
            
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("InputInfo")}>
            
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            </View>
            <StatusBar style="auto" />

        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        
        //justifyContent: 'center',
        
        marginTop: 0, // Set marginTop to 0
    },
    topContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        width: '100%',     // Change width to your desired value
        height: 65,    // Change height to your desired value
        //marginBottom: 10,
        backgroundColor: "#fff"
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 120, // Adjust the padding as needed
        paddingTop: 20,
        backgroundColor: "#fff"
    },
    image: {
        width: 80,
        height: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        MarginTop: 10,
        position: 'absolute',
        height: 50,
        bottom: 20,
        width: '60%',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    button: {
        paddingTop: 10,
        flex:1,
        height: '100%',
        backgroundColor: 'blue',
        borderRadius: 5,
        width: '100%',
    },
    midContainer: {
        flex: 4,
        height: '53%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    botContainer: {
        flex: 3,
        //height: '53%',
        //width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',

    }
});

