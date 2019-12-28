import React from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemListaEventos from './ItemListaEventos'
import HeaderComponent from '../Misc/HeaderComponent';
class ListaEventos extends React.Component {
  constructor (props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Puntos de interes',
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
        <ItemListaEventos key={1} tittle={"Puntos verdes"} subTittle={"Puntos de recepción de materiales reciclables y residuos especiales."} backgroundImage={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.buenosaires.gob.ar%2Fsites%2Fgcaba%2Ffiles%2Ffield%2Fimage%2Fpunto_verde_200.jpg&f=1&nofb=1'}/>
        <ItemListaEventos key={2} tittle={"Centro de reciclaje de la Ciudad"} subTittle={"Primer centro de Argentina que reúne cinco plantas de tratamiento de residuos."} backgroundImage={'https://www.buenosaires.gob.ar/sites/gcaba/files/varela_gcba_apm__30.jpg'}/>
      </View>
    );
  }

}

export default ListaEventos;
