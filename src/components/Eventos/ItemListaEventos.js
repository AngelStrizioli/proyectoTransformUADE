import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
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
 <View style={{marginHorizontal:'8%', marginVertical:'2%'}}>     
    <TouchableOpacity  onPress={() => { navigation.navigate('EventoSimple', {evento: evento}) }}>
            <ImageBackground
              source={{uri: this.props.backgroundImage}}
              style={styles.backgroundImage}>
              <View style={styles.container}>
                <View style={styles.containerItems}>
                    <Text style={styles.itemEventoTitulo}>{evento.title}</Text>
                    <Text style={styles.itemEventoDesc}>{evento.fecha}</Text>
                    <View style={{alignSelf:'flex-end', paddingRight:'3%'}}>
                      <Ionicons name="md-arrow-round-forward" size={30} color={'#FFFFFF'} />
                </View>
                </View>

                </View>
            

            </ImageBackground>
          </TouchableOpacity>
      </View>
 
   
    );
  }
} export default ItemListaEventos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  itemEventoTitulo: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    lineHeight:40,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    paddingLeft:'3%'
  },
  itemEventoDesc: {
    fontSize: 18,
    fontWeight: '400',
    textShadowRadius: 10,
    color: 'white',
    paddingLeft:'3%',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1
  },
  containerItems: {
    height: '100%',
    width: '100%',
    marginTop:'60%',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  containerIcono: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: width*0.8,
  }
});
