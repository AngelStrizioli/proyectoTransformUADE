import React from 'react';
import {View, Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemListaEventos from './ItemListaEventos'
import HeaderComponent from '../Misc/HeaderComponent';
import GetDatosAPI from '../Misc/GetDatosAPI';

//hardcodeados por ahora
const eventos = [{
    title: "Centro de Reciclaje de la Ciudad",
    texto: "Hello World",
    fecha: "Lunes a Sábado",
    img: "https://www.buenosaires.gob.ar/sites/gcaba/files/varela_gcba_apm__30.jpg",
  }
];

let eventoEcoBici = {
  title: "EcoBici",
    texto: "Hello World",
    fecha: "Durante todo el año",
    img: "https://www.buenosaires.gob.ar/sites/gcaba/files/18.2.19_nueva_ecobici-0873.jpg",
    markers: []
}

let eventoPuntosVerdes = {
  title: "Puntos Verdes",
    texto: "Hello World",
    fecha: "Durante todo el año",
    img: "https://www.buenosaires.gob.ar/sites/gcaba/files/styles/interna_noticia/public/field/image/plaza_monsenor_de_andrea_2_recoleta_comuna_2.jpg",
    markers: []
}

class ListaEventos extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      eb: false,
      pv: false
    }
  }

  static navigationOptions = {
    title: 'Puntos de interés',
    header: null,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-globe" size={24} color={focused ? '#00B2FF' : 'black'} />
    ),
  };

  componentDidMount(){
    GetDatosAPI.getDatosEcoBici(this.handleMarkers.bind(this));
    GetDatosAPI.getDatosPuntosVerdes(this.handlePuntosVerdes.bind(this));
  }
  

  renderEcoBici(navigation){
    if(this.state.eb){
      return(
        <ItemListaEventos evento={eventoEcoBici} backgroundImage={eventoEcoBici.img} navigation={navigation}/>
      )
    }else
      return null;
  }

  renderPuntosVerdes(navigation){
    if(this.state.pv){
      return(
        <ItemListaEventos evento={eventoPuntosVerdes} backgroundImage={eventoPuntosVerdes.img} navigation={navigation}/>
      )
    }else
      return null;
  }

  //hardcodeado por ahora
  handleMarkers(markers){
    eventoEcoBici.markers = markers;
    this.setState({eb: true})
  }

  handlePuntosVerdes(markers){
    eventoPuntosVerdes.markers = markers;
    this.setState({pv: true})
  }
  
  
  render() {
    const { navigation } = this.props;
    return(
      <View style={{flex:1}}>
        <HeaderComponent tittle={"Puntos de interés"}/>
        {eventos.map((evento, i) => {
          return(
            <ItemListaEventos key={i} evento={evento} backgroundImage={evento.img} navigation={navigation}/>
          )
        })}
        {this.renderPuntosVerdes(navigation)}
        {this.renderEcoBici(navigation)}
      </View>
    );
  }

}

export default ListaEventos;
