import { Ionicons,  FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView, Dimensions } from 'react-native';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createDrawerNavigator, DrawerNavigatorItems, DrawerActions } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import IdeasGuardadas from '../components/Ideas/IdeasGuardadas';
import ItemListaIdeas from '../components/Ideas/ItemListaIdeas';
import ResultadoProductoMultiple from '../components/ResultadoProductoMultiple';
import ResultadoProductoUnico from '../components/ResultadoProductoUnico';
import TodasLasIdeas from '../components/TodasLasIdeas';
import TodosLosMateriales from '../components/TodosLosMateriales';
import TipoDeMaterial from '../components/TipoDeMaterial';
import ReciclableSioNo from '../components/ReciclableSioNo';
import IdeaSimple from '../components/Ideas/IdeaSimple';
import ApiController from '../controller/ApiController';
import MaterialCompleto from '../components/MaterialCompleto'
import EventosPatrocinados from '../components/Eventos/EventosPatrocinados';
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
import {Container, Footer, FooterTab, } from 'native-base'

import { globalStyle, themeMainColor, tagsStyles } from "../styles/globalStyles";
import * as Font from 'expo-font';
import { withNavigation } from 'react-navigation';
import SearchBar from '../components/SearchBar'
import MiCuenta from '../components/MiCuenta'
import Login from './Login'
import SignUp from './SignUp'


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
    //console.log(newData)
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
    // funcion que llama al back para traer los productos cuando apretas el boton
    //console.log("props",this.props);
    let data = {
      name: this.state.nombreProducto
    }
    ApiController.getProductosByNombre(data, this.ObtenerDatosProd.bind(this));
  }
  
  render() {
      {/* decidir entre celeste: dbf5ff y celeste palido: f4fcff*/} 
    return (
    <Container>
        <ScrollView >
        
         <Text  style={globalStyle.titleStyle}>Aprendé a transformar</Text>
          <CategoriasCards navigation={this.props.navigation}></CategoriasCards>
          <View style={tagsStyles.tagsPosition}>
            <TagsCloud navigation={this.props.navigation}></TagsCloud>
          </View>
          <Text style={globalStyle.titleStyle}>Conciencia</Text>
          <Conciencia />
          <Text style={globalStyle.titleStyle}>Eventos</Text>
          <CardsEventos navigation={this.props.navigation}></CardsEventos>

        </ScrollView>
       {/*} <FooterMain />*/}

        </Container>

    );
  }
}

/*colores que usa uade en su pag web
- blanco en fondos
- 061B2B (azul muy oscuro) en los headers, logo, cars con mucha info
- 0098a0 (medio turquesa parecido al nuestro) en links o botones
- 0f446f (azul oscuro pero no tanto como el primero) en los touchables de los eventos */


const Tab = createBottomTabNavigator({
  Main:{
    screen:Main,  
  },
  TodasLasIdeas:{
    screen:TodasLasIdeas
  },
  TodosLosMateriales:{
    screen:TodosLosMateriales,
  },
  ListaEventos:{
    screen:ListaEventos
  }},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Main') {
          iconName = focused
            ? 'ios-home'
            : 'md-home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          
        } else if (routeName === 'TodasLasIdeas') {
          iconName = focused ? 'ios-bulb' : 'md-bulb';
        }
        else if (routeName === 'TodosLosMateriales') {
          iconName = focused ? 'ios-cube' : 'md-cube';
        }
        else if (routeName === 'ListaEventos') {
          iconName = focused ? 'md-calendar' : 'ios-calendar';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0f446f',
      inactiveTintColor: 'gray',
    },
  })



const bootRoot = createStackNavigator({
  
  Tab:{
    screen:Tab,
    navigationOptions:()=>{
      return{ headerLeft: (<View />),
      }}
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
  ReciclableSioNo: {
    screen: ReciclableSioNo,
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
  Login:{
    screen:Login
  },
  SignUp:{
    screen:SignUp
  }
  
},{
  defaultNavigationOptions:({navigation})=> {

    return{ headerRight:(<TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginHorizontal:15, marginTop:20, height:50}} >
     <Text> <Ionicons name="md-person" size={30} color={'white'} /> </Text>
   </TouchableOpacity>),
     headerTitle:( <SearchBar />),
     headerStyle: (globalStyle.mainHeader),
     headerTintColor:('white'),}
   }
})


const ContainerMiCuenta = createStackNavigator({
  PerfilUsuario:{
    screen:MiCuenta,
    navigationOptions:()=>{
      return{ headerLeft: (<View />),
      }}}

}, {
  defaultNavigationOptions:({navigation})=> {

   return{ headerRight:(<TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginHorizontal:15, marginTop:20, height:50}} >
    <Text> <Ionicons name="md-person" size={30} color={'white'} /> </Text>
  </TouchableOpacity>),
    headerTitle:( <SearchBar />),
    headerStyle: (globalStyle.mainHeader),
    headerTintColor:('white'),}
  }
});
const ContainerIdeasGuardadas = createStackNavigator({
  IdeasGuardadas:{
    screen:IdeasGuardadas,
    navigationOptions:()=>{
      return{ headerLeft: (<View />),
      }}}

}, {
  defaultNavigationOptions:({navigation})=> {

   return{ headerRight:(<TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginHorizontal:15, marginTop:20, height:50}} >
    <Text> <Ionicons name="md-person" size={30} color={'white'} /> </Text>
  </TouchableOpacity>),
    headerTitle:( <SearchBar />),
    headerStyle: (globalStyle.mainHeader),
    headerTintColor:('white'),}
  }
});
const ContainerInstructivo = createStackNavigator({
  Instructivo:{
    screen:Instructivo,
    navigationOptions:()=>{
      return{ headerLeft: (<View />),
      }}
  }

}, {
  defaultNavigationOptions:({navigation})=> {

   return{ headerRight:(<TouchableOpacity onPress={() => navigation.openDrawer()} style={{marginHorizontal:15, marginTop:20, height:50}} >
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
      ),}}
  },
    PerfilUsuario:{
      screen:ContainerMiCuenta,
      navigationOptions:()=>{
        return{ title: ('Mi cuenta'),
         drawerIcon: ({ focused }) => (
           <Ionicons name="md-contact" size={24} color={focused ? themeMainColor : 'black'} />
         ),}}
    },
    /*IdeasGuardadas: {
      screen: ContainerIdeasGuardadas,
      navigationOptions:()=>{
        return{ title: ('Mis ideas guardadas'),
         drawerIcon: ({ focused }) => (
           <Ionicons name="md-bookmark" size={24} color={focused ? themeMainColor : 'black'} />
         ),}}
    },*/
   /* Instructivo: {
      screen: ContainerInstructivo,
      navigationOptions:()=>{
        return{ title: ('Instructivo'),
         drawerIcon: ({ focused }) => (
           <Ionicons name="md-help-circle" size={24} color={focused ? themeMainColor : 'black'} />
         ),}}
    },*/
 
},{
    drawerPosition: 'right',  
    
});






export default createAppContainer(DrawerRight);
