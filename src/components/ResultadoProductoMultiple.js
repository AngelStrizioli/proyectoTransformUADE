import React, { Component } from 'react';
import { Text, View, ScrollView, } from 'react-native';

import ItemResultadoProducto from './ItemResultadoProducto'
import { themeMainColor, globalStyle } from '../styles/globalStyles';



class ResultadoProductoMultiple extends React.Component {
  

  render() {
    const { navigation } = this.props;
    let busqueda = navigation.getParam('busqueda', ''); 
    let productos = navigation.getParam('productos', []);
   

    return (
      <ScrollView>
            <Text style={globalStyle.titleStyle}>{busqueda}</Text>

        <View>
          
          { productos.map((producto) => {
             
              return <ItemResultadoProducto  key={producto.id} titulo = {producto.nombre} producto={producto} navigation={this.props.navigation}/>
            })
          }
          
        </View>
      </ScrollView>
 
    );
  }
}





export default ResultadoProductoMultiple;