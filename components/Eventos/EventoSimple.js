import React, { Compo } from 'react';
import { StyleSheet, ScrollView, View, Text, Dimensions, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const { width } = Dimensions.get('window');

class EventoSimple extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBlocks(evento) {
    if (evento.blocks != undefined) {
      return evento.blocks.map((block, i) => {
        return (
          <View key={i}>
            <Text style={styles.subtitleStyle}>{block.subtitle}</Text>
            <Text style={styles.textStyle}>{block.text}</Text>
          </View>
        )
      })
    }
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
          pinColor="#00b2ff"
        />)
      })
    }
  }

  render() {
    const { navigation } = this.props;
    const evento = navigation.getParam('evento', {});
    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{ uri: evento.img }}
          style={styles.backgroundImage}>
          <View style={styles.tittleContainer}>
            <View style={styles.backButtonView}>
              <TouchableOpacity style={styles.backButton} onPress={() => { navigation.goBack() }}>
                <Ionicons name="md-arrow-round-back" size={24} color={'white'} />
              </TouchableOpacity>
            </View>
            <View style={styles.tittlePosition}>
              <Text style={styles.titleStyle}>{evento.title}</Text>
            </View>
            <View style={styles.fechaPosition}>
              <Ionicons style={styles.fechaIcon} name="md-calendar" size={18} color={'white'} />
              <Text style={styles.fechaText}>{evento.fecha}</Text>
            </View>
          </View>
        </ImageBackground>

        {this.renderBlocks(evento)}

        <View>
          <Text style={styles.subtitleStyle}>Ubicación</Text>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -34.603118,
              longitude: -58.381681,
              latitudeDelta: 0.02,
              longitudeDelta: 0.0421,
            }}
          >
            {this.renderMarkers(evento)}
            
            
          </MapView>
        </View>
      </ScrollView>
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
  backgroundImage: {
    flex: 1,
    height: 200,
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  compoView: {
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
  fechaIcon: {
    bottom: 0,
    paddingBottom: 0,
  },
  fechaText: {
    fontSize: 18,
    color: 'white',
    marginLeft: '2%',
    textAlign: 'auto',
  },
  backButtonView: {
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
  textStyle: {
    paddingHorizontal: '5%',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 26
  },
})

export default EventoSimple;
