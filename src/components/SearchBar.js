import React, { Component } from 'react';
import {  TextInput, View,} from 'react-native';

import { withNavigation } from 'react-navigation';
import { themeMainColor,globalStyle  } from '../styles/globalStyles';
import ApiController from '../controller/ApiController'


class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nombreProducto: ""
      }
    }
  
    handleProducts(newData) {
      //console.log(newData)
      this.setState({ productos: newData })
      // aca empieza la navegacion
      if (this.state.productos.length > 1) {
        this.props.navigation.navigate('ResultadoProductoMultiple',
          {
            productos: this.state.productos,
            busqueda: this.state.nombreProducto,
            tipoBusqueda: 3          
          })
      } else {
        if (this.state.productos.length == 0) {
          alert("No se encontraron productos que coincidan con la búsqueda: " + this.state.nombreProducto)
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
      ApiController.getProductosByNombre(data, this.handleProducts.bind(this));
    }
  
    render() {
      return (
        <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center'}}>
        <TextInput
          style={globalStyle.inputDesigne}
          editable
          maxLength={32}
          height={30}
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
  export default withNavigation(SearchBar);
  