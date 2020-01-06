import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListaIdeas from './ListaIdeas';

/* ### PÁGINA PARA MOSTRAR TODAS LAS IDEAS QUE ESTÁN GUARDADAS EN LA BD ###
    En prototipo: todavía no está */
class TodasLasIdeas extends React.Component{
    static navigationOptions = {
      title: 'Ver todas las ideas',
      header: null,
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-bulb" size={24} color={focused ? '#00B2FF' : 'black'} />
      ),

    };

    render(){
      return(


      <ScrollView style={styles.container}>
        <View>
          <Text style= {styles.titleStyle}>Todas las ideas</Text>
        </View>
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
      marginTop: '15%',
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: '4%'

    }
  })

  export default TodasLasIdeas;
