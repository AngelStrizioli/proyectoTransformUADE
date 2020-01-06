import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ReciclableSioNo from './ReciclableSioNo';



class TipoDeMaterial extends React.Component{
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

        var material = navigation.getParam('material', {});
        var nombre = material.nombre;
        var texto = material.texto;
        var logo = material.logo == 'url_logo' ?  "https://images-na.ssl-images-amazon.com/images/I/31EAAncqIwL._SX425_.jpg" : material.logo;
        var descartes = material.comoReciclar;

        const urlReciclable = 'https://i.imgur.com/b2SVI7V.png';
        const urlWarning = 'https://i.imgur.com/fqPjNqa.png';
        const urlNoReciclable = 'https://i.imgur.com/R6WMDPY.png';

        let imagenLogo;
        let tituloPag;
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
          tituloPag = '¡Cuidado!';
          colorTexto = '#FAAF2E';
          icono = 'md-warning';  
          break;
          case 3: 
          imagenLogo = urlNoReciclable;
          tituloPag = '¡No es reciclable!'
          colorTexto = '#FE0000';
          icono = 'md-close';  
          break;
        }
      
      return(
      
          <ScrollView style={styles.container}>
            
            <Text style={styles.subtitleStyle}>
            
                {nombre}

            </Text>
            
          
            <Image title='Icono Material' source={{uri: logo}} style={{ height: 160, width: 160, alignSelf: 'center' }} />
            <Text style={styles.subtitleStyle}>
              Acerca de...
            </Text>
            
            <Text style={styles.textStyle}>
              {texto}
            </Text>


            <View style={styles.buttonPosition}>
                  <View style={{justifyContent:'center', marginVertical: '2%'}}>
                    <Text style={{color: colorTexto,
                                  fontSize: 24,
                                  textAlign: "center",
                                  textAlignVertical: 'center',
                                  backgroundColor: 'white',
                                  width: 300,
                                  height: 55,
                                  borderRadius: 50,
                                  borderColor: colorTexto,
                                  borderWidth: 6,
                                  marginBottom:'5%',
                                  marginTop:'5%',}} >
                      <Ionicons name={icono} size={24} color={colorTexto} />
                       {tituloPag}
                    </Text>
                  </View>
              </View>

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
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    subtitleStyle:{
        fontSize: 24,
        fontWeight: 'bold',
        padding:'2%'

    },
    textStyle:{
        padding:'4%',
        fontSize:18,
        textAlign:'justify'
    },

    buttonPosition: {
      flexDirection: 'row',
      justifyContent: 'center',
      
    },
    listTextStyle:{
      fontSize:18,
      padding:'1%'
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
    }
  
  })
  
  export default TipoDeMaterial;