import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { themeMainColor } from '../styles/globalStyles';
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
          <Text style={{fontSize:24, color:themeMainColor}}>
            {this.state.titulo}
          </Text>
      </TouchableOpacity>);
  }
}
