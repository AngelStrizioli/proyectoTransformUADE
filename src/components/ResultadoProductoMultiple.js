import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet} from 'react-native';

import ItemResultadoProducto from './ItemResultadoProducto'
import { themeMainColor, plasticoColor,papelColor,vidrioColor,pilaColor,metalColor,textilColor,electroColor,organicoColor  } from '../styles/globalStyles';



class ResultadoProductoMultiple extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      categorias: [ {
        title: "Plástico",
        img: "https://i.imgur.com/fCmH0nQ.png",
        titleColor:plasticoColor,
    },{
        title: "Papel",
        img: "https://i.imgur.com/OG1RVGW.png",
        titleColor:papelColor,
    }, {
        title: "Vidrio",
       img: "https://i.imgur.com/1VeQWb5.png",
       titleColor:vidrioColor,
    }, {
        title: "Pilas y baterías",
        img: "https://i.imgur.com/cbiuZXa.png",
        titleColor:pilaColor,
    }, {
        title: "Metales",
        img: "https://i.imgur.com/UKPPz8D.png",
        titleColor:metalColor,
    }, {
        title: "Textiles",
        img: "https://i.imgur.com/yfkEpxU.png",
        titleColor:textilColor,
    }, {
        title: "Electrónica",
        img: "https://i.imgur.com/0sIAH6f.png",
        titleColor:electroColor,
    }, {
        title: "Orgánicos",
        img: "https://i.imgur.com/gqCFXHJ.png",
        titleColor:organicoColor,
    }],
        text: ""
    }
}

  renderTitle(categoria, busqueda){
    if(categoria){
      return (
        <View style={{height: 60 , justifyContent: 'center', alignItems:'center'}}>
          <Text style={{color: categoria.titleColor, fontSize: 20, fontWeight: 'bold', alignSelf: 'center', textAlignVertical: 'center'}}>{categoria.title}</Text>
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
    let titleColor ="black";
    if(categoria){
      titleColor=categoria.titleColor
    }
    return (
      <View style={styles.container}>
      <ScrollView>

      
          {this.renderTitle(categoria, busqueda)}
         
 

        <View style={{marginTop:'2%', marginLeft:'4%'}}>
          
          { productos.map((producto) => {
             
              return <ItemResultadoProducto  key={producto.id} titulo = {producto.nombre} producto={producto} navigation={this.props.navigation} colorTitle={titleColor}/>
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