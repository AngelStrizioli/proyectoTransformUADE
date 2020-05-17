import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

import ItemResultadoProducto from './ItemResultadoProducto'
import { themeMainColor, plasticoColor, papelColor, vidrioColor, pilaColor, metalColor, textilColor, electroColor, organicoColor } from '../styles/globalStyles';



class ResultadoProductoMultiple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categorias: [],
      text: ""
    }
  }

  renderTitle(tipoBusqueda, categoria, tag, busqueda) {
    if (tipoBusqueda == 1) {
      return (
        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: categoria.background_color, fontSize: 18, fontWeight: 'bold', alignSelf: 'center', textAlignVertical: 'center' }}>{categoria.name}</Text>
        </View>
      )
    }
    else if (tipoBusqueda == 2) {
      return (
        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', textAlignVertical: 'center' }}>{tag.name}</Text>
        </View>
      )
    } else {
      return (
        <View style={{ height: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', textAlignVertical: 'center' }}>Resultados: {busqueda}</Text>
        </View>
      )
    }
  }
  

  render() {
    const { navigation } = this.props;
    let tipoBusqueda = navigation.getParam('tipoBusqueda', 0)
    let categoria, busqueda, tag
    if (tipoBusqueda == 1) {
      categoria = navigation.getParam('categoria', {})
    } else if (tipoBusqueda == 2) {
      tag = navigation.getParam('tag', '')
    } else if (tipoBusqueda == 3) {
      busqueda = navigation.getParam('busqueda', '');
    }
    let productos = navigation.getParam('productos', []);

    let titleColor = 'black'

    return (
      <View style={styles.container}>
        <ScrollView>

          {this.renderTitle(tipoBusqueda, categoria, tag, busqueda)}



          <View style={{ marginTop: '2%', marginLeft: '4%' }}>

            {productos.map((producto) => {

              return <ItemResultadoProducto key={producto.id} titulo={producto.name} producto={producto} navigation={this.props.navigation} colorTitle={titleColor} />
            })
            }

          </View>



        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '3%'
  },
  buttonPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%'

  },


  buttonDesigne: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: themeMainColor,
    width: 300,
    height: 55,
    borderRadius: 50,
    //fontWeight: "bold"
    //marginVertical:'10%',
    marginBottom: '5%',
  },
  botonLargo: {
    backgroundColor: themeMainColor,
    elevation: 2,
    shadowColor: 'rgba(0,0,0, .25)',
    shadowOffset: { height: 3, width: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderRadius: 70,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    width: 300,
    height: 55,
    marginTop: 50,
    marginBottom: 20
  }

})



export default ResultadoProductoMultiple;