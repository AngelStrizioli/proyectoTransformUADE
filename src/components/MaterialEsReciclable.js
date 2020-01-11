import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import MaterialCompleto from './MaterialCompleto';
import { Icon } from 'native-base';
import getProductosByMaterial from '../controller/ApiController'
import ApiController from '../controller/ApiController'
/* ### COMPONENTE PARA HACER UN ITEM DE LA GALERIA DE IDEAS ###
    En prototipo: Dentro de producto único > Idea1, Idea2, Idea3... 
    
    -FALTA: Guardar en la bd los logos para cada uno de los materiales y hacer que estos se asignen dinamicamente
    */
class MaterialEsReciclable extends React.Component{
  constructor(props){
    super(props);
    this.state ={ 
    }
  }
  ObtenerDatosProd(newData){
    
    this.setState({ productos: newData })
    this.props.navigation.navigate('MaterialCompleto',  {productos:this.state.productos,material:  this.props.material})
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
        if(materiales===1){
          return(
            <View style={styles.containerMaterial}>
                  <View style={styles.containerImage}>
                     <View >
                        <Image title='Icono Material' source={{ uri: (logoMaterial) }} style={{height: 80, width: 80, alignSelf: 'center',marginTop:'5%' }} />
                         <Text style={{fontSize:18, textAlign:'center', color: '#00B2FF'}}>{material.nombre}</Text>
                      </View>
                      <View >
                        <Image title='Icono Reciclable' source={{ uri: (imagenLogo) }} style={{height: 80, width: 80, alignSelf: 'center',marginTop:'5%' }} />
                         <Text style={{ fontSize:18, textAlign:'center', color: colorTexto}}>{tituloPag}</Text>
                      </View>
                  </View>
                  <View style={{marginTop: '4%'}}>
                    <TouchableOpacity style={styles.botonLargo} onPress={() => { this.onClickListener(material.id) }}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-around',}}>
                        <Text style={{fontSize:24,textAlign:'center',color:'white', textAlignVertical:'center'}}>Más Info...</Text>
                      
                        </View>
                     </TouchableOpacity>
                  </View>
            </View>
        );}else{
          return(
            <View style={styles.containerMaterial}>
                  <View style={styles.containerImage}>
                     <View style={{heigth: 80, width: '38%', marginRight: '2%'}}>
                        <Image title='Icono Material' source={{ uri: (logoMaterial) }} style={{height: 60, width: 60, alignSelf: 'center',marginTop:'5%' }} />
                         <Text style={{fontSize:18, textAlign:'center', color: '#00B2FF'}}>{material.nombre}</Text>
                      </View>
                      <View style={{heigth: 80, width: '45%'}}>
                        <Image title='Icono Reciclable' source={{ uri: (imagenLogo) }} style={{height: 60, width: 60, alignSelf: 'center',marginTop:'5%' }} />
                         <Text style={{ fontSize:18, textAlign:'center', color: colorTexto}}>{tituloPag}</Text>
                      </View>
                      <View style={{heigth: 80, width: '15%', paddingRight: '2%', paddingTop: '3%', paddingLeft: '2%'}}>
                        <TouchableOpacity style={styles.botonDebug} onPress={() => { this.onClickListener(material.id) }}>
                          <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                          <Ionicons name="md-information-circle-outline" size={40} color={'white'} />
                             {/*<Text style={{fontSize:18,textAlign:'center',color:'black'}}>Info</Text>*/}
                          </View>
                      </TouchableOpacity>
                     </View>
                  </View>
            </View>);
          }
    }
  }

  const styles = StyleSheet.create({
    
    containerImage:{
      flexDirection: 'row',
      justifyContent:'space-around',
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
      margin: '5%',
      //borderColor: '#6DCAF280',
      //borderWidth: 1,
      
    },
    botonDebug:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      //borderColor: "black",
      //borderWidth: 1,
      backgroundColor: '#00B2FF',
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
      backgroundColor: '#00B2FF',
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