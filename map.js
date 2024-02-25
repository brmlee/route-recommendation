import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import {Slider, Text, Icon, SearchBar, Button} from "rneui/themed";
import Geolocation from "react-native-community/Geolocation";


export default class Map extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: 37.78825,
            longitude: -122.4324,
            places:[],
            searchString: "",
            selectedLocation: null,
        }
    }
    getMyLocation = () => {
        Geolocation.getCurrentPosition(loc => {
            this.mapRef.animateToRegion({
                latitude: loc.coords.latitude, 
                longitude: loc.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
            this.setState({
                latitude: loc.coords.latitude, 
                longitude: loc.coords.longitude
            })
        })
    }
    searchSection = () => {
        <View style={{height:"35%", backgroundColor: "pink", flexDirection: "column"}}>
            <SearchBar
                placeholder="Tap here to search"
                ref={search => this.search = search}
                onChangeText={text => this.setState({searchString: text})}
                value={this.state.searchString}
                lightTheme={true}
                round={true}
                containerStyle={{backgroundColor: "white"}}
                />
          
        </View>
    }
    mapSection = () => {
        return (
            <View style={{height:"65%", backgroundColor: "pink", flexDirection: "column"}}>
                <MapView style={{...StyleSheet.absoluteFillObject}} 
                    provider={"google"}
                    onMapReady={() => {this.getMyLocation()}}
                    ref={(ref) => {this.mapRef = ref}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                </MapView>
            </View>
    
        )
    }
  render() {
    return (
      <View style={flexDirection: "column"}>
        {this.mapSection()}
        {this.searchSection()}
      </View>
    )
  }
}