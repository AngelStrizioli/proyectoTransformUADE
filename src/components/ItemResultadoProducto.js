import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { themeMainColor } from '../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';


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
        <View style={{marginBottom:'2%'}}>
          <TouchableOpacity onPress={() => { navigation.navigate('ResultadoProductoUnico', {producto: producto}) }}>
              <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:'6%'}}>
              <Text style={{fontSize:24, color:themeMainColor}}>{this.state.titulo} </Text>
              <Ionicons name="md-arrow-round-forward" size={30} color={themeMainColor} />
              </View>
          </TouchableOpacity>
        </View>);
  }
}
