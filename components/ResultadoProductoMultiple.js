import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemResultadoProducto from './ItemResultadoProducto'
//<Image source={require("../assets/images/LogoHorizontal.png")} />

/* ### PÁGINA PARA CUANDO UNA BÚSQUEDA DE "¡Transfórmalo!" DEVUELVE UN RESULTADO DE MÁS DE UN ELEMENTO ### 
      En prototipo: Resultados varios*/


class ResultadoProductoMultiple extends React.Component {

  render() 
 
  {
    const { navigation } = this.props;
    var busqueda = navigation.getParam('busqueda', ''); 
    var productos = navigation.getParam('productos', []);
   

    return (
      <View style={styles.container}>
      <ScrollView>

        <View style={styles.buttonPosition}>
          {/*<TouchableOpacity onPress={() => { this.props.navigation.navigate('navigatorr'); }}>
            <View style={{ marginRight: 10 }}>
              <Ionicons name="md-menu" size={32} color={'#00B2FF'} />
            </View>
    </TouchableOpacity>*/}
          <Text style={styles.textStyle}>

            Resultados: {busqueda}
          </Text>
         
        </View>

        <View style={{marginTop:'5%', marginLeft:'5%',  }}>
          
          { productos.map((producto) => {
             
              return <ItemResultadoProducto  key={producto.id} titulo = {producto.nombre} producto={producto} navigation={this.props.navigation}/>
            })
          }
          
        </View>
        
        <View style={styles.buttonPosition}>
          <TouchableOpacity style={{marginTop: 80, marginEnd:'5%'}} onPress={() => { this.props.navigation.goBack()}}>
            <View style={{justifyContent:'center'}}>
              <Text style={styles.buttonDesigne} >
              <Ionicons name="md-arrow-round-back" size={24} color={'white'} />
                       Buscar otra cosa...
                </Text>

            </View>
          </TouchableOpacity>
        </View>

    

      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },

  
  buttonDesigne: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: '#00B2FF',
    width: 300,
    height: 55,
    borderRadius: 50,
    //fontWeight: "bold"
    //marginVertical:'10%',
    marginBottom:'5%',
  }

})




export default ResultadoProductoMultiple;