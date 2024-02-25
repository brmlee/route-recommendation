import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Platform, TouchableOpacity } from 'react-native';

export default function HelpScreen () {
    return (
        <View>
            <Image source={HELP} style={styles.image}/>
            <Text style={styles.text}>This is the help screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
})