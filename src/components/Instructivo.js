

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


import { themeMainColor } from '../styles/globalStyles';

const { width } = Dimensions.get('window'); 


export default class Instructivo extends React.Component {
  constructor(props) {
    super(props);
    
  }
    static navigationOptions = {
        title: 'Instructivo',
        
       drawerIcon: ({ focused }) => (
          <Ionicons name="md-help-circle"  size={24} color={focused ? themeMainColor : 'black'}  />
        ),
      };
    render() {
      return (

        <View style={styles.container}>  
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
      height:'90%', 
      marginTop:'5%',
    }, 
    btnOmitirTutorial: {
      width: width,
      
    },
  });