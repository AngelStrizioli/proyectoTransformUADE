import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';

import ItemResultadoProducto from './ItemResultadoProducto'
import { themeMainColor, globalStyle } from '../styles/globalStyles';



class ResultadoProductoMultiple extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        categorias: [ {
            title: "Plástico",
            titleColor:'#62A60A',
        },{
            title: "Papel", 
            titleColor: '#FF6B0B'
        }, {
            title: "Vidrio",
            titleColor: '#00A6CE'
        }, {
            title: "Pilas y baterías",
            titleColor: '#CF0A2C'
        }, {
            title: "Metales",
            titleColor: '#F7A700'
        }, {
            title: "Textiles",
            titleColor: '#C126B8'
        }, {
            title: "Electrónica",
            titleColor: '#4F738A'
        }, {
            title: "Orgánicos",
            titleColor: '#A58D28'
        }],
        text: ""
    }
}

  renderTitle(categoria, busqueda){
    if(categoria){
      return (
        <View style={{height: 50, backgroundColor: categoria.backgroundColor, justifyContent: 'center', alignItems:'center', paddingTop: '5%' }}>
          <Text style={{color: categoria.titleColor, fontSize: 24, fontWeight: 'bold', alignSelf: 'center', textAlignVertical: 'center'}}>{categoria.title}</Text>
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
             
              return <ItemResultadoProducto  key={producto.id} titulo = {producto.nombre} producto={producto} navigation={this.props.navigation} colorTitle={categoria.titleColor}/>
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