

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
import { Button } from 'react-native-elements';

import { themeMainColor } from '../styles/globalStyles';
import {Container } from 'native-base'
import FooterMain from '../components/FooterMain'
const { width } = Dimensions.get('window'); 

export default class Instructivo extends React.Component {
  constructor(props) {
    super(props);
    
  }
    static navigationOptions = {
        title: ' ',
        header: null,
       /* drawerIcon: ({ focused }) => (
          <Ionicons name="md-help-circle"  size={24} color={focused ? themeMainColor : 'black'}  />
        ),*/
      };
    render() {
      return (
        <Container>
        <View style={styles.container}>  
          <View style={styles.carouselContainer2}>
            <ImagenCarouselInstructivo/> 
          </View> 
          <TouchableOpacity style={{marginHorizontal:'1%',borderWidth:.5, borderRadius:3, borderColor:'#009eff'}}
            onPress={() => {this.props.navigation.navigate('Main');}}
           >
            <Text style={{fontWeight:'bold', color:'#009eff', fontSize:24, textAlign:'center', marginVertical:'2%'}}>
            Omitir instructivo
            </Text>
            </TouchableOpacity>
        </View>
        <FooterMain />
      </Container>
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
      marginTop:'5%',
    }, 
    btnOmitirTutorial: {
      width: width,
      
    },
  });