import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemListaEventos from './ItemListaEventos'
import HeaderComponent from '../Misc/HeaderComponent';
import GetDatosAPI from '../Misc/GetDatosAPI';

import { themeMainColor } from '../../styles/globalStyles';

//hardcodeados por ahora
const eventos = [{
  title: "Centro de Reciclaje de la Ciudad",
  texto: "Hello World",
  fecha: "Lunes a Sábado",
  img: "https://www.buenosaires.gob.ar/sites/gcaba/files/varela_gcba_apm__30.jpg",
  blocks: [{
    subtitle: '¿Qué es?',
    text: 'Es el primer centro de Argentina que reúne cinco plantas de tratamiento de residuos y un centro educativo.'
  },
  {
    subtitle: 'CIPR',
    text: 'El Centro de Reciclaje de la Ciudad cuenta con un Centro de Información y Promoción del Reciclado (CIPR), que es la puerta de entrada exclusiva para visitantes y la cara visible del Centro de Reciclaje de la Ciudad. El CIPR se creó con el objetivo principal de acercar a la ciudadanía, de forma simple, entretenida y significativa, los conceptos y las prácticas de la reutilización, valorización, reciclaje y compostaje de las diferentes fracciones de los residuos sólidos urbanos.'
  }],
  markers: [{
    lat: -34.655123,
    long: -58.443167,
    title: 'Centro de Reciclaje de la Ciudad',
    desc: 'Villa Soldati'
  }]
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
  blocks: [
    {
      subtitle: '¿Qué son?',
      text: 'Son estaciones ubicadas en plazas y parques para que puedas acercar tus reciclables.'
    },
    {
      subtitle: '¿Cuándo podés acercar tus materiales?',
      text: "Puntos Verdes con Atención: de Miércoles a Domingos de 11 a 19h. (Recordá que podes dejar tus materiales reciclables las 24hrs del día). Puntos Verdes Especiales: de Miércoles a Domingos de 11 a 19h."
    },
    {
      subtitle: '¿Qué materiales se reciben?',
      text: 'Los puntos verdes reciben vidrio, metal, papel, plástico, cartón y aceite vegetal usado. Los puntos verdes especiales reciben también pequeños electrodomésticos y aparatos de informática o comunicación.'
    }
  ],
  markers: []
}

class ListaEventos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eb: false,
      pv: false
    }
  }

  static navigationOptions = {
    title: 'Puntos de interés',
    header: null,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-globe" size={24} color={focused ? themeMainColor : 'black'} />
    ),
  };

  componentDidMount() {
    GetDatosAPI.getDatosEcoBici(this.handleMarkers.bind(this));
    GetDatosAPI.getDatosPuntosVerdes(this.handlePuntosVerdes.bind(this));
  }


  renderEcoBici(navigation) {
    if (this.state.eb) {
      return (
        <ItemListaEventos evento={eventoEcoBici} backgroundImage={eventoEcoBici.img} navigation={navigation} />
      )
    } else
      return <Text>Cargando...</Text>;
  }

  renderPuntosVerdes(navigation) {
    if (this.state.pv) {
      return (
        <ItemListaEventos evento={eventoPuntosVerdes} backgroundImage={eventoPuntosVerdes.img} navigation={navigation} />
      )
    } else
      return null;
  }

  //hardcodeado por ahora
  handleMarkers(markers) {
    eventoEcoBici.markers = markers;
    this.setState({ eb: true })
  }

  handlePuntosVerdes(markers) {
    eventoPuntosVerdes.markers = markers;
    this.setState({ pv: true })
  }


  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
       <Text style= {{ marginTop: '5%',marginBottom:'3%',fontSize: 26,fontWeight: 'bold',textAlign: 'center'}}>
         Puntos de interes
       </Text>
        {eventos.map((evento, i) => {
          return (
            <ItemListaEventos key={evento.title} evento={evento} backgroundImage={evento.img} navigation={navigation} />
          )
        })}
        {this.renderPuntosVerdes(navigation)}
        {this.renderEcoBici(navigation)}
      </View>
    );
  }

}

export default ListaEventos;
