import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

class ItemListaEventos extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    const {navigation} = this.props
    const {evento} = this.props

    return(
      <TouchableOpacity  onPress={() => { navigation.navigate('EventoSimple', {evento: evento}) }}>
        <ImageBackground
          source={{uri: this.props.backgroundImage}}
          style={styles.backgroundImage}>
          <View style={styles.container}>
            <View style={styles.containerItems}>
                <Text style={styles.itemEventoTitulo}>{evento.title}</Text>
                <Text style={styles.itemEventoDesc}>{evento.fecha}</Text>
            </View>
            <View style={styles.containerIcono}>
              <Ionicons name="md-arrow-round-forward" size={28} color={'#FFFFFF'} />
            </View>
          </View>

        </ImageBackground>
      </TouchableOpacity>
    );
  }
} export default ItemListaEventos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '2%',
  },
  itemEventoTitulo: {
    fontSize: 18,
    fontWeight: '600',
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  itemEventoDesc: {
    fontSize: 16,
    fontWeight: '400',
    textShadowRadius: 10,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  containerItems: {
    height: '100%',
    width: '90%',
    marginTop:'15%',
    alignItems: 'flex-start',
  },
  containerIcono: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: width*0.3,
  }
});
