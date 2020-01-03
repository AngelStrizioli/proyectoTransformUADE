import React from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemListaEventos from './ItemListaEventos'
import HeaderComponent from '../Misc/HeaderComponent';

const evento1 = {
    title: "Puntos Verdes",
    texto: "HELLO",
    fecha: "Durante todo el año",
    img: "https://www.buenosaires.gob.ar/sites/gcaba/files/varela_gcba_apm__30.jpg"
  };

  const evento2 = {
    title: "EcoBici",
    texto: "HELLO",
    fecha: "Durante todo el año",
    img: "https://www.buenosaires.gob.ar/sites/gcaba/files/18.2.19_nueva_ecobici-0873.jpg"
  }

class ListaEventos extends React.Component {
  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Puntos de interés',
    header: null,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-globe" size={24} color={focused ? '#00B2FF' : 'black'} />
    ),
  };

  
  render() {
    const { navigation } = this.props;

    return(
      <View style={{flex:1}}>
        <HeaderComponent tittle={"Puntos de interés"}/>
        <ItemListaEventos key={1} evento={evento1} backgroundImage={'https://www.buenosaires.gob.ar/sites/gcaba/files/varela_gcba_apm__30.jpg'} navigation={navigation}/>
        <ItemListaEventos key={2} evento={evento2} backgroundImage={'https://www.buenosaires.gob.ar/sites/gcaba/files/18.2.19_nueva_ecobici-0873.jpg'} navigation={navigation}/>
      </View>
    );
  }

}

export default ListaEventos;
