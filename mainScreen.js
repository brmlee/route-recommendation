import React from 'react';
import { TextInput, View, StyleSheet, ScrollView, Text, TouchableOpacity, Image,StatusBar } from 'react-native';
import MapView from 'react-native-maps';
import { useState } from 'react';


const helpPic = require('./assets/helpImage.png');


export default function MainScreen ({navigation}) {
    const [location, setLocation] = useState("");

  return (
    <View style={styles.container}>
         {/* MapView component */}
         <View style={{height: "55%"}}>
      <MapView style={styles.map} />
      <View style={styles.settingContainer}>
            <TouchableOpacity style={styles.settingsbutton} onPress={() => navigation.navigate("Setting")}>
            <Text style={styles.buttonText}>Settings</Text>
            </TouchableOpacity>
        </View>  
        <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button}>
                    <Image style={styles.image} source={helpPic} onPress={() => navigation.navigate("Help")}/>
                </TouchableOpacity>
        </View>
      </View>
    
        <View style={{height: "45%"}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput 
                style={styles.input} 
                value={location} 
                onChangeText={setLocation} 
                placeholder="Tap here to type" 
                />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity style={styles.voicebutton} onPress={() => navigation.navigate("Setting")}>
                <Text style={styles.buttonText}>Voice Search</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: "gray"}}>Recent</Text>
        </View>
     
      </View>   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  divider: {
    width: '100%', // or specify a specific width
    height: 1, // height of the divider line
    backgroundColor: '#CCCCCC', // color of the divider line
  },
  settingContainer: {
    position: 'absolute',
    top: 20, // Adjust as needed
    left: 20, // Adjust as needed
    backgroundColor: 'blue',
    alignItems: 'center',
    //justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  settingsbutton: {
    flex:1,
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 5,
    width: 60,
  },
  voicebutton: {
    flex:1,
    height: 20,
    backgroundColor: 'blue',
    justifyContent: 'center',
    borderRadius: 5,
    width: "100%",
  },
  button: {
    flex:1,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: 60,
  },
  searchBar: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  recentSearches: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  buttonContainer: {

    position: 'absolute',
    top: 300, // Adjust as needed
    right: 30
 
},
image: {
    width: "100%",
    height: "100%",
}
});

