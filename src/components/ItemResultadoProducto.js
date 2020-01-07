import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ItemResultadoProducto extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // producto: null;
      titulo: ""
    }
  }


  componentDidMount() {
    this.setState({titulo: this.props.titulo});

  }

  render() {
    const { navigation } = this.props;
    const producto = this.props.producto;
      return (
        <TouchableOpacity onPress={() => { navigation.navigate('ResultadoProductoUnico', {producto: producto}) }}>
          <Text style={{fontSize:24, color:'#00B2FF'}}>
            {this.state.titulo}
          </Text>
      </TouchableOpacity>);
  }
}

//   return ((<TouchableOpacity key={i} onPress={() => { navigation.navigate('ResultadoProductoUnico', {a, b} ); }}>
//     <Text  key={i} style={{fontSize:24, color:'#00B2FF'}}>
//     {a} de {b[j+1]}

//     </Text>
//   </TouchableOpacity>))
