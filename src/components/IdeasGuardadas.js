import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ItemListaIdeas from './ItemListaIdeas';
import {AsyncStorage} from 'react-native';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
/* ### PÁGINA PARA VER TODAS LAS IDEAS GUARDADAS POR EL USUARIO ###
    En prototipo: Todavía no está. */
class IdeasGuardadas extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        ideas : []
      }
    }

    //Lo que hace es crear una funcion que se llama la funcion para obtener los poroductos solo cuando this.state.
    //Hace Focus en la pantalla, es decir se renderiza cuando se llama la pantalla una unica vez
    componentDidMount() {
      const { navigation } = this.props;
      this.focusListener = navigation.addListener('didFocus', () => {
        this._getSavedFav();
      });
    }

    componentWillUnmount() {
      // Se elimina el anterior asi s crea uno nuevo.
      this.focusListener.remove();
    }

    _renderItems(){
        console.log("rendering items");
        return this.state.ideas.map((item) => <ItemListaIdeas key={item.id} idea={item} navigation={this.props.navigation}></ItemListaIdeas> );
    }

    _getSavedFav = async () => {
      try {
          const keys = await AsyncStorage.getAllKeys();
          const savedItems =  await AsyncStorage.multiGet(keys);
          var i, myList = [];
          for (i = 0; i < savedItems.length; i++) {
            var x = savedItems[i];
            myList.push(JSON.parse(x[1]));
          }
          this.setState({ideas:myList});
      } catch (e) {
        console.log("algo salio mal! :()");
      }
    }

    static navigationOptions = {
      title: 'Ver mis ideas guardadas',
      drawerIcon: ({ focused }) => (
        <Ionicons name="md-bookmark" size={24} color={focused ? '#00B2FF' : 'black'} />
      ),
    };

    render(){
      if (this.state.ideas.length > 0) {
        return (
          <ScrollView style={styles.container}>

            <View>
              <Text style= {styles.titleStyle}>Ideas Guardadas</Text>
            </View>

           {this._renderItems()}
          </ScrollView>
        )
      } else {
      return(
        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          <Text style={{textAlign: 'center', fontSize: 18}}>No tenés ideas guardadas.</Text>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('App');}}>
          <Text style={{margin: 24,
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',}}>
              Volver al inicio
            </Text>
            </TouchableOpacity>
        </View>);
      }
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
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center'
    }
});

export default IdeasGuardadas;
