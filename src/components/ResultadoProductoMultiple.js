import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ItemResultadoProducto from './ItemResultadoProducto'
//<Image source={require("../assets/images/LogoHorizontal.png")} />

/* ### PÁGINA PARA CUANDO UNA BÚSQUEDA DE "¡Transfórmalo!" DEVUELVE UN RESULTADO DE MÁS DE UN ELEMENTO ### 
      En prototipo: Resultados varios*/

import { themeMainColor } from '../styles/globalStyles';

class ResultadoProductoMultiple extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        categorias: [ {
            title: "Plástico",
            img: "https://i.imgur.com/fCmH0nQ.png",
            backgroundColor:'#0084e5',
        },{
            title: "Papel",
            img: "https://i.imgur.com/OG1RVGW.png",
            backgroundColor:'#00ff45',
        }, {
            title: "Vidrio",
            img: "https://i.imgur.com/1VeQWb5.png",
            backgroundColor:'#00e6d4',
        }, {
            title: "Pilas y baterías",
            img: "https://i.imgur.com/cbiuZXa.png",
            backgroundColor:'#e50000',
        }, {
            title: "Metales",
            img: "https://i.imgur.com/UKPPz8D.png",
            backgroundColor:'#e3ff00',
        }, {
            title: "Textiles",
            img: "https://i.imgur.com/yfkEpxU.png",
            backgroundColor:'#ff00db',
        }, {
            title: "Electrónica",
            img: "https://i.imgur.com/0sIAH6f.png",
            backgroundColor:'grey',
        }, {
            title: "Orgánicos",
            img: "https://i.imgur.com/gqCFXHJ.png",
            backgroundColor:'#ff9c00',
        }],
        text: ""
    }
}

  renderTitle(categoria, busqueda){
    if(categoria){
      return (
        <View style={{height: 60, backgroundColor: categoria.backgroundColor, justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', alignSelf: 'center', textAlignVertical: 'center'}}>{categoria.title}</Text>
        </View>
      )
    }else{
      return(
      <Text style={styles.textStyle}>

            Resultados: {busqueda}
          </Text>
          )
    }
  }


  render() 
 
  {
    const { navigation } = this.props;
    let busqueda = navigation.getParam('busqueda', ''); 
    let productos = navigation.getParam('productos', []);
   
    const categoria = this.state.categorias.find(categoria => categoria.title === busqueda)

    return (
      <View style={styles.container}>
      <ScrollView>

      
          {this.renderTitle(categoria, busqueda)}
         
 

        <View style={{marginTop:'5%', marginLeft:'6%'}}>
          
          { productos.map((producto) => {
             
              return <ItemResultadoProducto  key={producto.id} titulo = {producto.nombre} producto={producto} navigation={this.props.navigation}/>
            })
          }
          
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
    textAlign: 'center',
    marginTop:'3%'
  },
  buttonPosition: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '1%'
    
  },

  
  buttonDesigne: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: 'center',
    backgroundColor: themeMainColor,
    width: 300,
    height: 55,
    borderRadius: 50,
    //fontWeight: "bold"
    //marginVertical:'10%',
    marginBottom:'5%',
  },
  botonLargo:{
    backgroundColor: themeMainColor,
    elevation: 2,
    shadowColor: 'rgba(0,0,0, .25)', 
    shadowOffset: { height: 3, width: 3 }, 
    shadowOpacity: 1, 
    shadowRadius: 2,
    borderRadius: 70,
    justifyContent:'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    width: 300,
    height: 55,
    marginTop: 50,
    marginBottom:20
  }

})




export default ResultadoProductoMultiple;