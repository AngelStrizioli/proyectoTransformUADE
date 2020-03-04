import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default class Conciencia extends Component {
  render() {
    return (
      <View style={{backgroundColor:'black'}} >
      <Text style={{color:'white', textAlign:'center'}}>El banner de Mati</Text>
      </View>
    );
  }
}
