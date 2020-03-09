import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import MaterialCompleto from './MaterialCompleto';
import { Icon } from 'native-base';
import getProductosByMaterial from '../controller/ApiController'
import ApiController from '../controller/ApiController'
import { Col, Row, Grid } from "react-native-easy-grid";

import { themeMainColor } from '../styles/globalStyles';
class MaterialEsReciclable extends React.Component{
  constructor(props){
    super(props);
    this.state ={ 
    }
  }
  ObtenerDatosProd(newData){
    
    this.setState({ productos: newData })
    this.props.navigation.navigate('MaterialCompleto',  {productos:this.state.productos,material:  this.props.material , titleProd: this.props.colorTitle})
  }
  onClickListener = (id) => { 
    // funcion que llama al back para traer los productos cuando apretas el boton
    //console.log("props",this.props);
    let data = {
      id: id
    }
    ApiController.getProductosByMaterial(data,this.ObtenerDatosProd.bind(this));
    
  }
    
    render(){
      const { navigation } = this.props;
      const materiales =this.props.materiales;
      const colorTitle = this.props.colorTitle
      const material = this.props.material;
      

      const logoMaterial = material.logo == 'url_logo' ?  "https://images-na.ssl-images-amazon.com/images/I/31EAAncqIwL._SX425_.jpg" : material.logo;
        //esto vuela cuando le pongamos los logos a los materiales en la bd

      const urlReciclable = 'https://i.imgur.com/b2SVI7V.png';
      const urlWarning = 'https://i.imgur.com/fqPjNqa.png';
      const urlNoReciclable = 'https://i.imgur.com/R6WMDPY.png';
        //cambiar estas const por los logos reales cuando esten terminados

      let imagenLogo;
      let colorTexto;
      let icono;

      switch(material.esReciclable){
        case 1: 
        imagenLogo = urlReciclable;
        tituloPag = '¡Es reciclable!';
        colorTexto = '#10E126';
        icono = 'md-checkmark';
        break;
        case 2: 
        imagenLogo = urlWarning;
        tituloPag = '¡Con cuidado!';
        colorTexto = '#FAAF2E';
        icono = 'md-warning'
        break;
        case 3: 
        imagenLogo = urlNoReciclable;
        tituloPag = '¡No es reciclable!'
        colorTexto = '#FE0000';
        icono = 'md-close';
        break;
      }

        //esto es lo que hay que cambiar si decidimos hacer mas categorias (hay un verde y un rojo, si decidimos 
        //meter un amarillo o varios distintos solo hay que cambiar como se decide la variable imagenLogo)
        {console.log("cant: "+materiales)}
        console.log(material.id);
        
          return(
            <View> 
              <TouchableOpacity style={styles.containerMaterial} onPress={() => { this.onClickListener(material.id) }}>
                  <Grid>
                    <Row>

                      <Col size={10} style={{}}>
                        <Image title='Icono Material' source={{ uri: (logoMaterial) }} style={{height: 50, width: 50}} />
                        </Col>
                        <Col size={30} style={{}}>
                         <Text style={{fontSize:14,marginTop:'9%' ,textAlign:'left', color: themeMainColor, marginLeft:'3%'}}>{material.nombre}</Text>
                         </Col>
                         <Col size={10} style={{marginTop:'4%', alignItems:'flex-end'}}> 
                          <Ionicons name="md-arrow-round-forward" size={30} color={'black'} />
                          </Col>

                      </Row>
                  </Grid>
                    
              </TouchableOpacity>

            </View>
          );
          
    }
  }

  const styles = StyleSheet.create({
    
    containerImage:{
      flexDirection: 'row',
      //justifyContent:'space-between',
      //width:'100%',

      //marginBottom: '5%'
    },
    textStyle:{
      //padding:'4%',
      fontSize:18,
      textAlign:'center'
    },
    subtitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: '4%',
      //textAlign: "center" 
    },
    containerMaterial:{
      padding: '5%',
      //borderColor: '#6DCAF280',
      //borderWidth: 1,
      width:'100%',
      
    },
    botonDebug:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      //borderColor: "black",
      //borderWidth: 1,
      backgroundColor: themeMainColor,
      marginTop: '17%',
      elevation: 2,
      shadowColor: 'rgba(0,0,0, .4)', 
      shadowOffset: { height: 5, width: 5 }, 
      shadowOpacity: 5, 
      shadowRadius: 2,
      borderRadius: 100,
      height: 41,
      width: 41
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
      width: 250,
      height: 50,
    }

     
  })
  
  export default MaterialEsReciclable;