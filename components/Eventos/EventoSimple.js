import React, {Compo} from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import  MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const { width } = Dimensions.get('window');

class EventoSimple extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { navigation } = this.props;
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];

    return(
      <ScrollView style={styles.container}>
        <ImageBackground
              source={{uri: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.buenosaires.gob.ar%2Fsites%2Fgcaba%2Ffiles%2Ffield%2Fimage%2Fpunto_verde_200.jpg&f=1&nofb=1'}}
              style={styles.backgroundImage}>
            <View style={styles.tittleContainer}>
              <View style={styles.backButtonView}>
                <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack()}}>
                  <Ionicons name="md-arrow-round-back" size={24} color={'white'} />
                </TouchableOpacity>
              </View>
              <View style={styles.tittlePosition}>
                <Text style={styles.titleStyle}>Puntos verdes</Text>
              </View>
              <View style={styles.fechaPosition}>
                <Ionicons style={styles.fechaIcon}name="md-calendar" size={18} color={'white'} />
                <Text style={styles.fechaText}>Durante todo el año</Text>
              </View>
            </View>
          </ImageBackground>
        <View>
          <Text style={styles.subtitleStyle}>¿Que es?</Text>
          <Text style={styles.textStyle}>Son estaciones ubicadas en plazas y parques para que puedas acercar tus reciclables.</Text>
        </View>
        <View>
          <Text style={styles.subtitleStyle}>¿Cuándo podés acercar tus materiales?</Text>
          <Text style={styles.textStyle}>Puntos Verdes con Atención: de Miércoles a Domingos de 11 a 19h. (Recordá que podes dejar tus materiales reciclables las 24hrs del día).</Text>
        </View>
        <View>
          <Text style={styles.subtitleStyle}>¿Como llego?</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -34.603118,
              longitude: -58.381681,
              latitudeDelta: 0.02,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: -34.603118,
                longitude: -58.381681,
              }}
              title={"Markador de prueba 1"}
              descripcion={"This is so epic!"}
              />
              <Marker
                coordinate={{
                  latitude: -34.60,
                  longitude: -58.37,
                }}
                title={"PUNTO VERDE 2"}
                descripcion={"You shall not pass!!!"}
                />
              <Marker
                coordinate={{
                  latitude: -34.61,
                  longitude: -58.393,
                }}
                title={"PUNTO VERDE 2"}
                descripcion={"You shall not pass!!!"}
                />
              <Marker
                coordinate={{
                  latitude: -34.598,
                  longitude: -58.388,
                }}
                title={"PUNTO VERDE 2"}
                descripcion={"You shall not pass!!!"}
                />
          </MapView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    marginVertical: '5%',
    flex:1,
    height: 300,
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    height: 200,
  },
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  compoView:{
      marginVertical: '5%'
  },
  tittleContainer: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
  },
  tittlePosition: {
    bottom: 0,
    width: '100%',
    paddingHorizontal: '2%'
  },
  fechaPosition: {
    bottom: 0,
    margin: '1%',
    width: '100%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fechaIcon:{
    bottom: 0,
    paddingBottom: 0,
  },
  fechaText: {
    fontSize: 18,
    color: 'white',
    marginLeft: '2%',
    textAlign: 'auto',
  },
  backButtonView:{
    flex: 1,
    marginHorizontal: '2%',
    marginVertical: '6%',
    width: '15%',
  },
  backButton: {
    backgroundColor: 'rgba(254, 254, 254, 0.3)',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',

  },
  titleStyle: {
      fontSize: 26,
      fontWeight: 'bold',
      color: 'white',
  },
  subtitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: '4%'
  },
  textStyle:{
      paddingHorizontal:'5%',
      fontSize:18,
      textAlign:'justify',
      lineHeight:26
  },
})

export default EventoSimple;
