import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Button } from "native-base";

import { themeMainColor } from '../../../styles/globalStyles';


export default class LockMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            touchableMap: "none",
            backgroundColor: "",
          }
        this.handleUnblockMap.bind(this);
    }

    handleUnblockMap() {
        this.setState({touchableMap:true, touchableMap:"auto"}); 
        console.log(this.state.touchableMap)
    }

    renderMarkers(evento) {
        if (evento.markers != undefined) {
          return evento.markers.map((marker, i) => {
            return(
            <Marker
              key={i}
              coordinate={{
                latitude: marker.lat,
                longitude: marker.long,
              }}
              title={marker.title}
              description={marker.desc}
              pinColor={themeMainColor}
            />)
          })
        }
      }
        //
                   
    render() {
        const { navigation } = this.props;
        return (
            <View >
                <Text style={styles.subtitleStyle}>Ubicación</Text>
                <TouchableWithoutFeedback onPress={()=>{ this.handleUnblockMap()}} >
                    <View pointerEvents={this.state.touchableMap}>
                        <MapView
                        
                        style={styles.map}
                        provider={ PROVIDER_GOOGLE }
                        listMode={true}
                        showsUserLocation={true}
                        initialRegion={{
                            latitude: -34.603118,
                            longitude: -58.381681,
                            latitudeDelta: 0.02,
                            longitudeDelta: 0.0421,
                        }}
                        >
                            {this.renderMarkers(this.props.evento)}
                        </MapView>
                    </View>
                    <View style={{backgroundColor:this.state.mapBlockScreen, position:"absolute", height:"100%", width:"100%"}} />
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        marginVertical: '5%',
        flex: 1,
        height: 300,
        width: '100%',
    },
    subtitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: '4%'
      },
})

