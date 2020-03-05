import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';

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
import FooterMain from '../components/FooterMain'

import { globalStyle, themeMainColor, tagsStyles } from "../styles/globalStyles";
import * as Font from 'expo-font';
/* ### PÁGINA INICIAL ###
    En prototipo: Init */


    const { width } = Dimensions.get('window');
class LogoHeader extends React.Component {
  render() {
    return (
      <View style={{ alignSelf: 'center', flex: 1 }}>
      <Text style={{color:'white', textAlign:'center', fontSize:18}}>PONÉ LA BARRA DE BUSQUEDA </Text>
     {/*   <Image
          resizeMode="cover"
          source={require("../assets/images/LogoHorizontal.png")}
          style={{
            width: 240,
            height: 50,
            resizeMode: 'contain',
            alignSelf:"center",
          }}/>*/}
      </View>
    );
  }
}


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
      {/*  <Footer style={{}}>
           <FooterTab style={{marginHorizontal:'10%', marginTop:'3%'}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Instructivo')}>
                  <Ionicons name="md-bulb" size={30}/>
              </TouchableOpacity> 
              <TouchableOpacity>
                 <Ionicons name="md-cube" size={30} /> 
              </TouchableOpacity>
              <TouchableOpacity>
                 <Ionicons name="md-globe" size={30} /> 
              </TouchableOpacity>        
              <TouchableOpacity>
                 <Ionicons name="md-help-circle" size={30} /> 
              </TouchableOpacity>

              </FooterTab>
          </Footer>*/}
        </Container>

    );
  }
}

/*colores que usa uade en su pag web
- blanco en fondos
- 061B2C (azul muy oscuro) en los headers, logo, cars con mucha info
- 0098a0 (medio turquesa parecido al nuestro) en links o botones
- 0f446f (azul oscuro pero no tanto como el primero) en los touchables de los eventos */
const styles = StyleSheet.create({
  inputSize: {
    flexDirection: 'row',
  },
   image:{
    marginTop:35,
    marginBottom:20,
    marginLeft:18,
    width: 80,
    height: 80,

  
  }

});

const CustomDrawer=(props) =>(
  <View style={{flex:1 }} >
      <View style={{height:150,marginBottom:60 }}  >
         <TouchableOpacity onPress={() => {props.navigation.navigate('PerfilUsuario')}}>
          <Image
                  title='Mi perfil'
                  style={styles.image}
                  borderRadius={40}
                  source={{uri: 'http://www.lse.ac.uk/International-Inequalities/Assets/Images/BlankImage.jpg'}}
                  />
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5}}>
          <Text style={{textAlign:'left', marginLeft:10, fontSize:20, fontWeight:'bold'}}>Usuario</Text>
<Text style={{textAlign:'left', marginLeft:10, fontSize:18, marginBottom:20 }}>emailPrueba@gmail.com</Text>
          </View>
          </TouchableOpacity>
      </View>
      <View>
          <DrawerNavigatorItems {...props} />
      </View>
        
  </View>
)

const DrawerLeft = createDrawerNavigator({ 
  Main:{
    screen: Main,
    }, 
    PerfilUsuario:{
      screen:PerfilUsuario,
    },
    IdeasGuardadas: {
      screen: IdeasGuardadas,
    },
  TodasLasIdeas: {
    screen: TodasLasIdeas,
  },
  TodosLosMateriales: {
    screen: TodosLosMateriales,
  },
  ListaEventos: {
    screen: ListaEventos
  },
   Instructivo: {
    screen: Instructivo,
  },
},{
    drawerPosition: 'left', 
});

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombreProducto: ""
    }
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
    let data = {
      name: this.state.nombreProducto
    }
    ApiController.getProductosByNombre(data, this.ObtenerDatosProd.bind(this));
  }

  render() {
    return (
      <View style={styles.inputSize}>
      <TextInput
        style={globalStyle.inputDesigne}
        editable
        maxLength={32}
        placeholder="Ej: Lata, yerba, CD..."
        placeholderTextColor={themeMainColor}
        underlineColorAndroid = "transparent"
        onChangeText={(name) => this.setState({ nombreProducto: name })}
        value={this.state.name}
        onSubmitEditing={this.onClickListener}
      />
     </View>
    );
  }
}

const bootRoot = createStackNavigator({
  DrawerLeft: {
    screen: DrawerLeft,
    navigationOptions: ({ navigation }) => ({     
     headerLeft: <TouchableOpacity onPress={() => navigation.openDrawer()} style={{margin:10, maxWidth: "90%"}} >
        <Text> <Ionicons name="md-person" size={30} color={'white'} /> </Text>
      </TouchableOpacity>,
      headerTitle: <SearchBar navigation={navigation}/>,
      headerRight: <View />,
    }),    
  },
 
  Main:{
    screen:Main
  },
  
  Instructivo: {
    screen: Instructivo,
  },
  Footer:{screen:FooterMain},
 
 
  ResultadoProductoMultiple: {
    screen: ResultadoProductoMultiple,
  },
  TodasLasIdeas: {
    screen: TodasLasIdeas,
  },
  TodosLosMateriales: {
    screen: TodosLosMateriales,
  },
  ListaEventos: {
    screen: ListaEventos
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
  }


}, {
  defaultNavigationOptions: {
    headerTitle: <SearchBar />,
    headerRight: <View />,
    headerStyle: globalStyle.mainHeader,
    //headerRight: <View />,
    headerTintColor: 'white',
  }
})

export default createAppContainer(bootRoot);
