import React from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemListaEventos from './ItemListaEventos'

class ListaEventos extends React.Component {
  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Todos los eventos',
    header: null,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-globe" size={24} color={focused ? '#00B2FF' : 'black'} />
    ),
  };

  render() {
    const { navigation } = this.props;

    return(
      <View style={{flex:1, marginTop: "10%"}}>
        <ItemListaEventos key={1}/>
        <ItemListaEventos key={2}/>
      </View>
    );
  }

}

export default ListaEventos;
