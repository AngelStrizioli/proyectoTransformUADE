import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import IdeasGuardadas from '../components/Ideas/IdeasGuardadas';
import ItemListaIdeas from '../components/Ideas/ItemListaIdeas';
import ResultadoProductoMultiple from '../components/ResultadoProductoMultiple';
import ResultadoProductoUnico from '../components/ResultadoProductoUnico';
import TodasLasIdeas from '../components/TodasLasIdeas';
import TodosLosMateriales from '../components/TodosLosMateriales';
import TipoDeMaterial from '../components/TipoDeMaterial';
import IdeaSimple from '../components/Ideas/IdeaSimple';
import ApiController from '../controller/ApiController';
import MaterialCompleto from '../components/MaterialCompleto'
import ListaEventos from '../components/Eventos/ListaEventos';
import Instructivo from '../components/Instructivo';
import EventoSimple from '../components/Eventos/EventoSimple';
import PerfilUsuario from '../components/PerfilUsuario';
import HeaderComponent from '../components/Misc/HeaderComponent'
import CategoriasCards from '../components/CategoriasCards'
import TagsCloud from '../components/TagsCloud';
import ComentariosEventos from '../components/Eventos/ComentariosEventos'
import ComentariosIdeas from '../components/Ideas/ComentariosIdeas'
import Conciencia from '../components/Conciencia'
import CardsEventos from '../components/Eventos/CardsEventos'

import {Container } from 'native-base'
import FooterMain from '../components/FooterMain'
import { globalStyle, themeMainColor, tagsStyles } from "../styles/globalStyles";
import SearchBar from '../components/SearchBar'

/* ### PÁGINA INICIAL ###
    En prototipo: Init */
const { width } = Dimensions.get('window');

class Main extends React.Component {
  static navigationOptions = {
    title: 'Inicio',
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-arrow-round-back" size={24} color={focused ? themeMainColor : 'black'} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      nombreProducto: '',
      fontLoaded: false,
    };
  }
  
  ObtenerDatosProd(newData) {
    this.setState({ productos: newData })
    // aca empieza la navegacion
    this.fetchObjetos
    if (this.state.productos.length > 1) {
      this.props.navigation.navigate('ResultadoProductoMultiple',
        {
          productos: this.state.productos,
          busqueda: this.state.nombreProducto,
        })
    } else {
      if (this.state.productos.length == 0) {
        alert("no se encontraron productos con este nombre: " + this.state.nombreProducto)
      } else {
        this.props.navigation.navigate('ResultadoProductoUnico',
          { producto: this.state.productos[0] })
      }
    }
  }

  onClickListener = () => {
    let data = {
      name: this.state.nombreProducto
    }
    ApiController.getProductosByNombre(data, this.ObtenerDatosProd.bind(this));
  }
  
  render() {
    return (
    <Container>
        <ScrollView >

         <Text style={globalStyle.titleStyle}>Aprendé a transformar</Text>
          <CategoriasCards navigation={this.props.navigation}></CategoriasCards>
          <View style={tagsStyles.tagsPosition}>
            <TagsCloud navigation={this.props.navigation}></TagsCloud>
          </View>
          <Text style={globalStyle.titleStyle}>Conciencia</Text>
          <Conciencia />
          <Text style={globalStyle.titleStyle}>Eventos</Text>
          <CardsEventos navigation={this.props.navigation}></CardsEventos>

        </ScrollView>
        <FooterMain />
    </Container>
    );
  }
}

/*colores que usa uade en su pag web
- blanco en fondos
- 061B2B (azul muy oscuro) en los headers, logo, cars con mucha info
- 0098a0 (medio turquesa parecido al nuestro) en links o botones
- 0f446f (azul oscuro pero no tanto como el primero) en los touchables de los eventos */

const bootRoot = createStackNavigator({
  Main:{
    screen:Main
  },
  ResultadoProductoMultiple: {
    screen: ResultadoProductoMultiple,
  },
  ItemListaIdeas: {
    screen: ItemListaIdeas,
  },
  IdeaSimple: {
    screen: IdeaSimple,
  },
  ResultadoProductoUnico: {
    screen: ResultadoProductoUnico,
  },
  MaterialCompleto: {
    screen: MaterialCompleto,
  },
  TipoDeMaterial: {
    screen: TipoDeMaterial,
  },
  IdeasGuardadas: {
    screen: IdeasGuardadas,
  },
  EventoSimple:{
    screen: EventoSimple
  },
  HeaderComponent:{
    screen:HeaderComponent,
  },
  ComentariosEventos: {
    screen: ComentariosEventos
  },
  ComentariosIdeas: {
    screen: ComentariosIdeas
  },


}, {
  defaultNavigationOptions:({navigation})=> {

   return{ headerRight:(<TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginRight:10, marginTop:20, height:50}} >
    <Text> <Ionicons name="md-person" size={30} color={'white'} /> </Text>
  </TouchableOpacity>),
    headerTitle:( <SearchBar />),
    headerStyle: (globalStyle.mainHeader),
    headerTintColor:('white'),}
  }
})
const DrawerRight = createDrawerNavigator({ 
  Inicio:{
    screen: bootRoot,
    navigationOptions:()=>{
     return{ title: ('Inicio'),
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-home" size={24} color={focused ? themeMainColor : 'black'} />
      ),}
    }
  },
    PerfilUsuario:{
      screen:PerfilUsuario,
    },
    IdeasGuardadas: {
      screen: IdeasGuardadas,
    },
    Instructivo: {
      screen: Instructivo,
    },
 
},{
    drawerPosition: 'right', 
});



const Swi = createSwitchNavigator({
  DrawerRight: {
    screen: DrawerRight,
    navigationOptions:()=>{
      return{
        headerTintColor:'red'
      }
    }
  },

  Footer:{screen:FooterMain},

  TodasLasIdeas: {
      screen: TodasLasIdeas,
    },
    TodosLosMateriales: {
      screen: TodosLosMateriales,
    },
    ListaEventos: {
      screen: ListaEventos
    },
    


});

export default createAppContainer(Swi);
