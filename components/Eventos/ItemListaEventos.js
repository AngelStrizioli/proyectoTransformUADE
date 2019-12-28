import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

class ItemListaEventos extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return(
      <TouchableOpacity>
        <ImageBackground
          source={{uri: this.props.backgroundImage}}
          style={styles.backgroundImage}>
          <View style={styles.container}>
            <View style={styles.containerItems}>
                <Text style={styles.itemEventoTitulo}>{this.props.tittle}</Text>
                <Text style={styles.itemEventoDesc}>{this.props.subTittle}</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    padding: '2%',
  },
  itemEventoTitulo: {
    fontSize: 18,
    fontWeight: '600',
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    color: 'white',
  },
  itemEventoDesc: {
    fontSize: 16,
    fontWeight: '400',
    textShadowRadius: 10,
    color: 'white',
  },
  containerItems: {
    height: '100%',
    width: '90%',
    alignItems: 'flex-start',
  },
  containerIcono: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: 80,
  }
});
