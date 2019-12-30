import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import IdeasGuardadas from './components/IdeasGuardadas';
import ItemListaIdeas from './components/ItemListaIdeas';
import ResultadoProductoMultiple from './components/ResultadoProductoMultiple';
import ResultadoProductoUnico from './components/ResultadoProductoUnico';
import TodasLasIdeas from './components/TodasLasIdeas';
import TodosLosMateriales from './components/TodosLosMateriales';
import TipoDeMaterial from './components/TipoDeMaterial';
import ReciclableSioNo from './components/ReciclableSioNo';
import IdeaSimple from './components/IdeaSimple';
import ApiController from './controller/ApiController';
import MaterialCompleto from './components/MaterialCompleto'
import EventoSimple from './components/Eventos/EventoSimple'
import ListaEventos from './components/Eventos/ListaEventos';
import CardsProductos from './components/CardsProductos'

/* ### PÁGINA INICIAL ###
    En prototipo: Init */

class LogoHeader extends React.Component {
  render() {
    return (
      <View style={{ alignSelf: 'center', flex: 1 }}>
        <Image
          resizeMode="cover"
          source={require("./assets/images/LogoHorizontal.png")}
          style={{
            width: 240,
            height: 50,
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  }
}


class App extends React.Component {
  static navigationOptions = {
    title: 'Transform',
    header: null,
    drawerIcon: ({ focused }) => (
      <Ionicons name="md-arrow-round-back" size={24} color={focused ? '#00B2FF' : 'black'} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      nombreProducto: '',
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
          busqueda: this.state.busqueda
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
    return (
      <ScrollView style={{ backgroundColor: '#00B2FF' }}>
        <View style={styles.container}>
          <View style={{
            height: 70,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <TouchableOpacity style={{ marginLeft: 10, marginTop: '10%' }}
              onPress={() => { this.props.navigation.toggleDrawer(); }}>

              <Ionicons name="md-menu" size={32} color={'white'} />

            </TouchableOpacity>
          </View>
          <View style={styles.inputSize}>
            <Image source={require("./assets/images/LogoHorizontal.png")} style={{
              width: 320,
              height: 70,
              resizeMode: 'contain',
            }} />
          </View>

          <View style={styles.inputSize} marginTop='4%'>
            <Text style={styles.subtitleStyle}>Aprendé a transformar estos productos:</Text>
          </View>

          <View style={styles.inputSize}>
            <View style={{ marginBottom: '5%', marginHorizontal: '2%' }}>
              <CardsProductos navigation={this.props.navigation}></CardsProductos>
            </View>
          </View>

          <View style={styles.inputSize}>
            <Text style={styles.subtitleStyle}>O ingresá el producto que quieras:</Text>
          </View>

          <View style={styles.inputSize}>
            <TextInput
              style={styles.inputDesigne}
              editable
              maxLength={32}
              placeholder="Ej: Lata, yerba, CD..."
              placeholderTextColor="#6DCAF2"
              onChangeText={(name) => this.setState({ nombreProducto: name })}
              value={this.state.name}

            />
          </View>
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity onPress={this.onClickListener} >

                <Text style={styles.buttonDesigne} >
                  ¡Transformalo!
              </Text>
              </TouchableOpacity>
              {/* Este view es para el boton de debug de las clases  */}
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '6%'}}>
              <Text style={styles.titleStyle}>Eventos patrocinados:</Text>
            </View>
            <View style={{ marginTop: '1%', marginBottom: '3%'}}>
              <ListaEventos navigation={this.props.navigation}></ListaEventos>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }} />
          </View>
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    //esto esta para que quede todo exactamente en el medio de la pantalla, si se vuela queda arriba de todo
    flex: 1,
    // https://www.color-hex.com/ pag util para ver y hacer colores en hexa por si no sabemos el nombre en palabras
    backgroundColor: '#00B2FF',
    justifyContent: 'center',

  },
  inputSize: {
    //estas dos lineas sirven para que quede todo centrado

    flexDirection: 'row',
    justifyContent: 'center',

  },
  inputDesigne: {
    height: 48,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'white',
    color: '#00B2FF',
    borderRadius: 5,
    paddingLeft: '5%',
    //textAlign: 'center',
    //fontFamily:'montserrat',
    fontSize: 16,
    //el width podemos poner en pixeles y va a estar fijo para todos los dispositivos pero  si la pantalla
    //es muy grande se ve medio peque. SI lo ponemos en porcentaje, en pantallas grandes se ve MUY grande
    width: 280
  },
  buttonSize: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonDesigne: {
    marginTop: 20,
    width: 246,
    height: 55,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    color: "#00B2FF",

    fontSize: 24,
    fontWeight: 'normal',
    // fontFamily:'SFUIDisplay-Medium',
    borderRadius: 50, //android

    // overflow: 'hidden',


    textAlign: "center",
    elevation: 2,//android
    shadowColor: 'rgba(0,0,0, .25)', // IOS
    shadowOffset: { height: 3, width: 3 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },
  titleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: '2%',
    color: 'white'

  },
  subtitleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: '2%',
    color: 'white'
  }



});

const navigatorr = createDrawerNavigator({
  App: {
    screen: App
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
  EventoSimple: {
    screen: EventoSimple
  }
});


const bootRoot = createStackNavigator({

  navigatorr: {
    screen: navigatorr,
    navigationOptions: {
      header: null,
    },
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
  IdeasGuardadas: {
    screen: IdeasGuardadas,
  }

}, {
  defaultNavigationOptions: {
    headerTitle: () => <LogoHeader />,

    headerStyle: {
      backgroundColor: '#00B2FF',
    },
    headerTintColor: 'white',
  }
})

export default createAppContainer(bootRoot);
