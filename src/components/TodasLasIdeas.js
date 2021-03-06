import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListaIdeas from './Ideas/ListaIdeas';
import { Divider } from 'react-native-elements';

import { themeMainColor, globalStyle,footerContent } from '../styles/globalStyles';
import { withNavigation } from 'react-navigation';
/* ### PÁGINA PARA MOSTRAR TODAS LAS IDEAS QUE ESTÁN GUARDADAS EN LA BD ###
    En prototipo: todavía no está */
class TodasLasIdeas extends React.Component{
    static navigationOptions = {
      title: 'Ideas',
     drawerIcon: ({ focused }) => (
        <Ionicons name="md-bulb" size={24} color={focused ? themeMainColor : 'black'} />
      ),

    };
    constructor(props){
      super(props);
     
    
    }

    render(){
      return(
  
        
        <ScrollView>
          <View>
            <Text style= {footerContent.titleStyle}>Ideas</Text>
          </View>
          <Divider style={{ backgroundColor: 'black' }} />
          <View>
            <ListaIdeas navigation={this.props.navigation}></ListaIdeas>
          </View>
        </ScrollView>

      
      );
    }


  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    titleStyle: {
      marginTop: '5%',
      marginBottom:'3%',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitleStyle: {
      fontSize: 14,
      fontWeight: 'bold',
      padding: '4%'

    }
  })

  export default withNavigation(TodasLasIdeas);
