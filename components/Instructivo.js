

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import ImagenCarouselInstructivo from './ImagenCarouselInstructivo'

const { width } = Dimensions.get('window'); 

export default class Instructivo extends React.Component {
    static navigationOptions = {
        title: 'Instructivo',
        header: null,
        drawerIcon: ({ focused }) => (
          <Ionicons name="md-help-circle" size={24} color={focused ? '#00B2FF' : 'black'} />
        ),
      };
    render() {
      return (
        <View style={styles.container}>
        <TouchableOpacity  onPress={() => {this.props.navigation.navigate('App');}}>
            <Text style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom:18}}>
                Omitir instructivo
            </Text>
        </TouchableOpacity>
          <View style={styles.carouselContainer2}>
            <ImagenCarouselInstructivo/> 
          </View> 
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    carouselContainer2: { 
      width: width,
      height:'85%', 
      marginTop:10
    }, 
  });