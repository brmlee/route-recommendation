import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, TextInput, Select, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';


export default function InputInfoScreen ({navigation}) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' },
      ]);

    return (
        <View style={styles.container}>
            <Text style={{ flex: .5, fontSize: 30, fontWeight: 'bold' }}>User Information</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'flex-start' }}>Name</Text>
                <TextInput 
                style={styles.input} 
                value={name} 
                onChangeText={setName} 
                placeholder="Tap here to type" 
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'flex-start' }}>Age</Text>
                <TextInput style={styles.input} value={age} onChangeText={setAge} placeholder="Tap here to type"></TextInput>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ alignSelf: 'flex-start' }}>Gender</Text>
                <View style={{alignItems: 'center', justifyContent: 'center'}} >
                <DropDownPicker style={{width: '90%'}}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                />
                </View>
                
            </View>
            <View style={{flex: 3,  alignItems: 'center',}}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
                </View>           
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'left',
        paddingTop: StatusBar.currentHeight
    },
    input:{
        height: 40,
        //alignItems: 'right',
        width: '90%',
        margin: 12, 
        padding: 10,
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center'
    },
    buttonContainer: {
        MarginTop: 20,
        position: 'absolute',
        height: 50,
        bottom: 20,
        width: '60%',
        alignItems: 'center',
    },
    button: {
        paddingTop: 10,
        flex:1,
        height: '100%',
        backgroundColor: 'blue',
        borderRadius: 5,
        width: '100%',
    }
});

