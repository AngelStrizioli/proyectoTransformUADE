import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {Container, Footer, FooterTab, } from 'native-base'
import { withNavigation } from 'react-navigation';


class FooterMain extends React.Component {
    constructor(props){
        super(props);
       
      
      }
    render() {
        const { navigation } = this.props;
      return (
     
       <Footer style={{height:65}}>
           <FooterTab style={{marginHorizontal:'10%', marginTop:'3%'}}>
             <TouchableOpacity onPress={() =>this.props.navigation.navigate('Main')}>
                <View style={{alignItems:'center'}}> 
                <Ionicons name="md-home" size={30}/>
                <Text style={{fontSize:8, justifyContent:'center'}}>Home</Text>
                </View> 
              </TouchableOpacity> 
              <TouchableOpacity onPress={() =>this.props.navigation.navigate('TodasLasIdeas')}>
              <View style={{alignItems:'center'}}>
                  <Ionicons name="md-bulb" size={30}/>
                  <Text style={{fontSize:8}}>Ideas</Text>
                </View> 
              </TouchableOpacity> 
              <TouchableOpacity onPress={() =>this.props.navigation.navigate('TodosLosMateriales')}>
              <View style={{alignItems:'center'}}>
                 <Ionicons name="md-cube" size={30} /> 
                 <Text style={{fontSize:8}}>Materiales</Text>
                </View> 
              </TouchableOpacity>
              <TouchableOpacity onPress={() =>this.props.navigation.navigate('ListaEventos')}>
              <View style={{alignItems:'center'}}>
                 <Ionicons name="md-globe" size={30} /> 
                 <Text style={{fontSize:8}}>Eventos</Text>
                </View> 
              </TouchableOpacity>        
              <TouchableOpacity onPress={() =>this.props.navigation.navigate('Instructivo')}>
              <View style={{alignItems:'center'}}>
                 <Ionicons name="md-help-circle" size={30} /> 
                 <Text style={{fontSize:8}}>Instructivo</Text>
                </View> 
              </TouchableOpacity>

              </FooterTab>
          </Footer>
     
      );
    }
  }
  export default withNavigation(FooterMain);