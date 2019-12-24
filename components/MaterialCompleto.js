import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ReciclableSioNo from './ReciclableSioNo';
import ApiController from '../controller/ApiController'
import ItemResultadoProducto from './ItemResultadoProducto'


class MaterialCompleto extends React.Component{
  constructor(props){
    super(props);
    this.state ={ 
     
    }
  }
  
  
  /*FALTA:
  -Usar correctamente los campos del json que llega en el array materiales
   */
    render(){
        const { navigation } = this.props;
        //material original
        var material = navigation.getParam('material', {});
        var productos = navigation.getParam('productos', []);
        var nombre = material.nombre;
        var texto = material.texto;
        var logo = material.logo == 'url_logo' ?  "https://images-na.ssl-images-amazon.com/images/I/31EAAncqIwL._SX425_.jpg" : material.logo;
        //reciclable original
        esReciclable=material.esReciclable
        var descartes=material.comoReciclar
        

        const urlReciclable = 'https://i.imgur.com/b2SVI7V.png';
        const urlWarning = 'https://i.imgur.com/fqPjNqa.png';
        const urlNoReciclable = 'https://i.imgur.com/R6WMDPY.png';

        let imagenLogo;
        let tituloPag;
        switch(material.esReciclable){
            case 1: 
            imagenLogo = urlReciclable;
            tituloPag = '¡Es reciclable!'
            break;
            case 2: 
            imagenLogo = urlWarning;
            tituloPag = '¡Cuidado!'
            break;
            case 3: 
            imagenLogo = urlNoReciclable;
            tituloPag = '¡No es reciclable!'
            break;
          }

      
      return(
      
          <ScrollView style={styles.container}>
            
            <Text style={styles.titleStyle}>
            
                {nombre}

            </Text>
            
          
            <Image title='Icono Material' source={{uri: logo}} style={{ height: 160, width: 160, alignSelf: 'center' }} />
            <Text style={styles.subtitleStyle}>
              Acerca de...
            </Text>
            <Text style={styles.textStyle}>
              {texto}
            </Text>
            <Text style={styles.subtitleStyle}>
              Se encuentra en...
            </Text>
            <View style={{marginLeft: '6%'}}>
              {productos.map((producto) =>{return(<ItemResultadoProducto  key={producto.id} titulo = {producto.nombre} producto={producto} navigation={this.props.navigation}/>)})}
              
            
            </View>
            <Text style={styles.subtitleStyle}>
            {tituloPag}
          </Text>
          <Image title='Icono Reciclable' source={{uri:(imagenLogo)}} style={{height: 160, width: 160,  alignSelf: 'center' }}/>
          <Text style={styles.subtitleStyle}>Cómo descartarlo:</Text>
          <View style={styles.textStyle}>
            {descartes.map((descarte)=>{return (
              <Text key={descarte} style={styles.listTextStyle}> »  
              {descarte}</Text>)})}
          </View>
            
          {/* 

          FALTA:
          Agregar funcionalidad de la llamada a la bd para traer todos los productos que contengan este material

          <Text style={styles.subtitleStyle}>
             Se encuentra en:
          </Text>
          <View>
            
      {this.state.productos.map((producto)=>{ return(
      producto.materiales.map((mat)=>{
        if(mat.nombre==nombre){
          return <TouchableOpacity key={producto.nombre}
          onPress={() => { this.props.navigation.navigate('ResultadoProductoUnico', {producto: producto})}}>
            <Text style={{fontSize:24, color:'#00B2FF', marginLeft: '5%'}}>{producto.nombre}</Text>
          </TouchableOpacity>
        }
      }))
        })
        }
          </View>
      */}
        <View style={styles.buttonPosition}>
          <TouchableOpacity style={{marginVertical: '10%'}} onPress={() => { this.props.navigation.goBack()}}>
            <View style={{justifyContent:'center'}}>
              <Text style={styles.buttonDesigne} >
              <Ionicons name="md-arrow-round-back" size={24} color={'white'} />
                       Volver
                </Text>

            </View>
          </TouchableOpacity>
        </View>
        

          </ScrollView>

      
      );
    }
  }
  const styles = StyleSheet.create({
      //material original
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    subtitleStyle:{
      marginTop: '3%',
        fontSize: 24,
        fontWeight: 'bold',
        padding:'2%'

    },
    textStyle:{
        padding:'4%',
        fontSize:18,
        textAlign:'justify',
        lineHeight:26
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
      //marginVertical:'10%',
      //marginBottom:'5%',
    },
    //reciclable original
    
      subtitleStyle2: {
        fontSize: 24,
        fontWeight: 'bold',
        padding:'4%'
      },
      titleStyle:{
          fontSize: 24,
          fontWeight: 'bold',
          padding:'4%',
          textAlign: "center"
  
      },
      textStyle2:{
          fontSize:18,
          padding:'10%'
      },
      listTextStyle:{
        fontSize:18,
        padding:'1%',
        lineHeight:26,
      },
      compoPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      buttonDesigne2: {
        color: "white",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: 'center',
        backgroundColor: '#00B2FF',
        width: 300,
        height: 55,
        borderRadius: 50,
        marginBottom:'5%'
        
      }
  
  })
  
  export default MaterialCompleto;